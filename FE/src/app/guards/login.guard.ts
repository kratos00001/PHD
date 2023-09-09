import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private teacherService: TeacherService, private router: Router) {}

  canActivate(): boolean {
    if (this.teacherService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
