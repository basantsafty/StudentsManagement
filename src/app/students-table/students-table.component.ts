import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent {
  students$ = this.studentsService.students$; 
  constructor(private studentsService: StudentsService) {}
  delete(id: number) {
  this.studentsService.deleteStudent(id);
}
}
