import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private teacherService: TeacherService, private router: Router) {}

  onLogin(): void {
    this.teacherService.getAllStudents().subscribe(
      (teachers) => {
        const teacher = teachers.find((t: any) => t.access_id === this.username && t.password === this.password);
        if (teacher) {
          // Successful login
          this.teacherService.setAuthToken('authToken');
          // this.errorMessage = 'Valid username and password';
         this .router.navigate(['/subjects']); // Navigate to the dashboard or desired page
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'An error occurred';
      }
    );
  }
}