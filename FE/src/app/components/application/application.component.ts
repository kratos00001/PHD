import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  onLogin(): void {
    this.studentService.getAllStudents().subscribe(
      (students) => {
        const student = students.find((s: any) => s.cne === this.username && s.password === this.password);
        if (student) {
          this.studentService.setAuthToken('apptoken');
          // this.errorMessage = 'Valid username and password';
         this .router.navigate(['/']); // Navigate to the dashboard or desired page
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
