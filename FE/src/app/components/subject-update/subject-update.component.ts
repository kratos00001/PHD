import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.css']
})
export class SubjectUpdateComponent implements OnInit{
  subject: any = {};

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const subjectId = this.route.snapshot.params['id'];
    this.subjectService.getSubjectById(subjectId).subscribe(
      (data) => {
        this.subject = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  UpdateSubject(): void {
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
    }
  }
}
