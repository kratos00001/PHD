import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: any[] = [];
  currentTeacherId: number | undefined;

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService,
  ) { }

  ngOnInit(): void {
    // Get the current teacher's ID from the teacher service
    this.currentTeacherId = this.teacherService.getCurrentTeacherId();
    console.log('first on subject-list : ',this.currentTeacherId);
    // Check if a teacher is logged in
    if (this.currentTeacherId) {
      // Fetch all subjects
      this.subjectService.getAllSubjects().subscribe(
        (data) => {
          console.log(data);
          this.subjects = data.filter((subject: any) => subject.teacher.id === this.currentTeacherId);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('No teacher is logged in.');
    }
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
