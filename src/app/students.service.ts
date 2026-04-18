import { Injectable } from '@angular/core';
import { Student } from './studentsInterface';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
private studentsSubject = new BehaviorSubject<Student[]>([]);
students$: Observable<Student[]> = this.studentsSubject.asObservable();

  addStudent(student: Student) {
    const current = this.studentsSubject.value;
    this.studentsSubject.next([...current, student]);
  }
  deleteStudent(id: number) {
    const current = this.studentsSubject.value;
    this.studentsSubject.next(current.filter(s => s.id !== id));
  }
getStudentById(id: number): Student | undefined {
  return this.studentsSubject.value.find(s => s.id === id);
}


}
