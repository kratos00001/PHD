import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-home',
  templateUrl: './students-home.component.html',
  styleUrls: ['./students-home.component.css']
})
export class StudentsHomeComponent implements OnInit {
  messageInscription?: string;
  choix1Reult?: string;
  choix2Reult?: string;
  isAlreadyInscribed: boolean = false;

  constructor(public studentService: StudentService, public router: Router) {}

  ngOnInit(): void {
    this.studentService.getInscriptionStatut().subscribe((data: any) => {
      this.messageInscription = data.message;
      this.isAlreadyInscribed = this.inscriptionToBoolean(data.message);
    });

    this.studentService.getChoixOne().subscribe((res: any) => {
      this.choix1Reult = res.message;
    });

    this.studentService.getChoixTwo().subscribe((res: any) => {
      this.choix2Reult = res.message;
    });
  }

  inscriptionToBoolean(status: string): boolean {
    return status === 'VOUS ETE DEJA INSCRIT';
  }

  logout_s(): void {
    this.studentService.logout();
    this.router.navigate(['/']);
  }
}
