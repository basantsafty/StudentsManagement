import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StudentsTableComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
