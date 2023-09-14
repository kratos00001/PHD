import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent {

  constructor(public studentService : StudentService, public router: Router) { }

  logout_s(): void {
    this.studentService.logout();
    this.router.navigate(['/']);
  }
}
