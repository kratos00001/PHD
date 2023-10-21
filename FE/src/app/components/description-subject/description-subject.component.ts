import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allSubjects } from 'src/app/model/AllSubjects';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-description-subject',
  templateUrl: './description-subject.component.html',
  styleUrls: ['./description-subject.component.css']
})
export class DescriptionSubjectComponent implements OnInit{

  sujetid:any;
  Subjects: any;
  ngOnInit(): void {
    this.sujetid= this.routeParam.snapshot.paramMap.get('id'); 
    this.sujetid = parseInt(this.sujetid, 10);
    this.Subjects=this.subjectService.AllSubjects.find((o)=>{ return o.idsubject===this.sujetid});
  }
  constructor(private routeParam: ActivatedRoute,public studentService : StudentService, public router: Router,private subjectService: SubjectService) {

   }

  logout_s(): void {
    this.studentService.logout();
    this.router.navigate(['/']);
    
  }

  
  
  
}