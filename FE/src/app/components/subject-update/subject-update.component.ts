import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.css']
})
export class SubjectUpdateComponent {
  subject: any = {};

  constructor(
    private subjectService: SubjectService,
    private router: Router
  ) {}

  createOrUpdateSubject(): void {
    if (this.subject.id) {
      // Update an existing subject
      this.subjectService.updateSubject(this.subject.id, this.subject).subscribe(
        () => {
          this.router.navigateByUrl('/subjects');
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      // Create a new subject
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
}
