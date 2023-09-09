import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  cpassword: string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}

  registerUser(): void {
    if (this.password !== this.cpassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    const newUser = { cne: this.username, password: this.password };
  
    // Check if the CNE already exists in the database
    this.studentService.getAllStudents().subscribe(
      (students) => {
        const existingStudent = students.find((s: any) => s.cne === this.username);
        if (existingStudent) {
          // If CNE exists, proceed with registration
          this.studentService.registerUser(newUser).subscribe(
            () => {
              alert('Registration successful! You can now log in.');
              this.router.navigateByUrl('/application');
            },
            (error) => {
              alert('Registration failed. Please try again.');
              console.log(error);
            }
          );
        } else {
          // If CNE doesn't exist, show an alert
          alert('The provided CNE is not in the database. Please try again with an existing CNE.');
        }
      },
      (error) => {
        alert('An error occurred while checking CNE. Please try again.');
        console.log(error);
      }
    );
  }
  
  
  
}
