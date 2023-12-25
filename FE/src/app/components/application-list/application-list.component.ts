import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { allSubjects } from 'src/app/model/AllSubjects';
import { studentsDto } from 'src/app/model/studentsdto';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent  implements OnInit{
  ngOnInit(): void {
    this.getstudents();
  }
  constructor(
    private teacherService: TeacherService,
    public studentService : StudentService,
    private router: Router,
  ) { }

  allSubjects: studentsDto[] = [];
  getstudents(){
    this.teacherService.Getallstudentdto().subscribe((res) => {
     this.allSubjects=res;
     console.log('Received data:', this.allSubjects);
    });


  }
  accepter(userId:number, choix:string) {
    console.log((this.allSubjects.find(subject => subject.idstudent === userId))?.email)
    if (choix === 'choix1') {
      this.teacherService.accepter(userId, 1).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/applications']);
      });
      this.teacherService.sendEmail({
        to: (this.allSubjects.find(subject => subject.idstudent === userId))?.email ?? 'default-email@example.com',
        subject: 'Application Accepted',
        body: 'Your application has been accepted.'
      }).subscribe(response => {
        console.log('Send email response:', response);
      });
    } else {
      this.teacherService.accepter(userId, 2).subscribe((res) => {
        console.log(res );
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/applications']);
      });
    }
  }

   refuser(userId:number, choix:string) {
    if (choix === 'choix1') {
      this.teacherService.refuser(userId, 1).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/applications']);
      });
      this.teacherService.sendEmail({
        to: (this.allSubjects.find(subject => subject.idstudent === userId))?.email ?? 'default-email@example.com', // Replace with the student's email
        subject: 'Application Rejected',
        body: 'Your application has been rejected.'
      }).subscribe(response => {
        console.log(response);
      });
    } else {
      this.teacherService.refuser(userId, 2).subscribe((res) => {
        console.log(res);
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/applications']);
      });
    }
  }

}
