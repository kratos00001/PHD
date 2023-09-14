import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers-navbar',
  templateUrl: './teachers-navbar.component.html',
  styleUrls: ['./teachers-navbar.component.css']
})
export class TeachersNavbarComponent implements OnInit{
  teacher: any = {};
  currentTeacherId: number | undefined;

  constructor(public teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.currentTeacherId = this.teacherService.getCurrentTeacherId();
    this.teacherService.getTeacherById(this.currentTeacherId).subscribe(
      (data) => {
        this.teacher = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  logout(): void {
    this.teacherService.logout();
    this.router.navigate(['/']);
  }
}
