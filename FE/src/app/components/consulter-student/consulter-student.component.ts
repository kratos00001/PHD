import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Consulter } from 'src/app/model/ConsulterStudent';
import { FileService } from 'src/app/services/file.service';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-consulter-student',
  templateUrl: './consulter-student.component.html',
  styleUrls: ['./consulter-student.component.css']
})
export class ConsulterStudentComponent implements OnInit {
  studentid:any;
  student1: Consulter = new Consulter;
  ngOnInit(): void {
    this.studentid= this.routeParam.snapshot.paramMap.get('id');
    this.studentid = parseInt(this.studentid, 10);
    console.log(this.studentid)
    this.consulterstudents();
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private routeParam: ActivatedRoute,private _formBuilder: FormBuilder,private teacherService: TeacherService,private fileService:FileService) {}
   consulterstudents(){
    this.teacherService.consulterStudent(this.studentid).subscribe((res) => {
     this.student1=res;
     console.log(this.student1)
     });
   }

   changeformdate(originalDateString :any){
    const originalDate = new Date(originalDateString);
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month because it's zero-based
    const day = originalDate.getDate().toString().padStart(2, '0');
    // Create the formatted date string
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
  }

  downloadFile(file: string){
    let fileId: number | undefined;
    console.log(file);
    switch(file) {
      case "bac":
      fileId = this.student1.copies?.bacId;
      break;
      case "cin":
      fileId = this.student1.copies?.cinId;
      break;
      case "cv":
         fileId = this.student1.copies?.cvId;
         break;
      case "image":
         fileId = this.student1.copies?.imageId;
         break;
      case "license":
        fileId = this.student1.copies?.licenseId;
        break;
      case "master":
         fileId = this.student1.copies?.masterId;
         break;
      default:
      fileId = -1;
      break;
    }
    this.fileService.getFile(fileId!).subscribe((response)=>{

    let file = new Blob([response], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  })
}


}
