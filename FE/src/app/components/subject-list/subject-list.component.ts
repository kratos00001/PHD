import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: any[] = [];

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe(
      (data) => {
        const teacherId = this.teacherService.getCurrentTeacherId();
        this.subjects = data;
        console.log(teacherId);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadSubjects(): void {
    this.subjectService.getAllSubjects().subscribe(
      (data) => {
        this.subjects = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteSubject(id: number): void {
    this.subjectService.deleteSubject(id).subscribe(
      () => {
        this.loadSubjects();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
