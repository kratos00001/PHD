import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private studentService: StudentService, private router: Router) {}

  canActivate(): boolean {
    if (this.studentService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/application']);
      return false;
    }
  }
}
