import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from '../studentsInterface';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
const id = Number(this.route.snapshot.paramMap.get('id'));
this.student = this.studentsService.getStudentById(id);

  }
}
