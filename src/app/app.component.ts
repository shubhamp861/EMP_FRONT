import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp';
  student=null;
  constructor(private studentService$:StudentService){
    this.studentService$.getStudentList().subscribe(x=>{
      console.log(x)
      if(x.length==0){
        let count =5;
        while(count--){
          this.student=new Student();  
          this.student.student_id=count;   
          this.student.student_name="shubham";  
          this.student.student_email="shubham@gmail.com";  
          this.student.student_branch="DA";  
          this.studentService$.createStudent( this.student).subscribe(x=>console.log(x));
        }
        this.studentService$.getStudentList().subscribe(x=>console.log(x));
      }
    
    });
   
    
  }
}
