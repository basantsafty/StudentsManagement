import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Student } from '../studentsInterface';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentsService: StudentsService) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      id: [null],
      firstName: [''],
      lastName: [''],
      age: [null],
      gender: [''],
      email: [''],
      phone: [''],
      address: [''],
      city: [''],
      country: [''],
      department: [''],
      level: [null],
      GPA: [null],
      enrollmentDate: [''],
      isActive: [false]
    });
  }

  onSubmit() {
    const newStudent: Student = this.studentForm.value;
    this.studentsService.addStudent(newStudent);
    this.studentForm.reset(); // clear form after submit
  }
}
