import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit{
  subject: any = {};
  currentTeacherId: number | undefined;

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private router: Router,
    ) {}

  ngOnInit(): void {
      this.currentTeacherId = this.teacherService.getCurrentTeacherId();
      this.teacherService.getTeacherById(this.currentTeacherId).subscribe(
        (data) => {
          this.subject.teacher = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

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
