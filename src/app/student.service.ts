import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url="/api/students";

  constructor(private httpClient:HttpClient) { }
  
  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.url);
  }
}
