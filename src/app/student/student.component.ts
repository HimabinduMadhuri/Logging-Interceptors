import { Student } from './../../student';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students$ :Observable<Student[]>;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents(){
     this.students$=this.studentService.getStudents()
  }


}
