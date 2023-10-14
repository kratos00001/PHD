import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class BlockGuard implements CanActivate {
  constructor(private studentService: StudentService, private teacherService: TeacherService, private router: Router) {}

  canActivate(): boolean {
    if (this.studentService.isAuthenticated()) {
        this.router.navigate(['/students']);
        return false;
    } else if (this.teacherService.isAuthenticated()) {
        alert('You have to logout first!');
        this.router.navigate(['/subjects']);
        return false;
    } else {
        return true;
    }
  }
}
