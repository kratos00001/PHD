import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent {
  subject: any = {};

  constructor(private subjectService: SubjectService, private router: Router) {}

  createSubject(): void {
    this.subjectService.createSubject(this.subject).subscribe(
      () => {
        this.router.navigateByUrl('/subjects');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
