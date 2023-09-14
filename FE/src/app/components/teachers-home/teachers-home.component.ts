import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers-home',
  templateUrl: './teachers-home.component.html',
  styleUrls: ['./teachers-home.component.css']
})
export class TeachersHomeComponent {

  constructor(public teacherService: TeacherService) { }

}
