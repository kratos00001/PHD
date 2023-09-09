import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public teacherService: TeacherService, public studentService: StudentService, private router: Router){}

  ngOnInit(): void {}

  logout_t(): void {
    this.teacherService.logout();
    this.router.navigate(['/']);
  }
  logout_s(): void {
    this.studentService.logout();
    this.router.navigate(['/']);
  }

}
