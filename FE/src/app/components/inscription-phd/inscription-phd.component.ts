import {Component,ElementRef,OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { allSubjects } from 'src/app/model/AllSubjects';
import { InscriptionForm } from 'src/app/model/InscriptionForm';
import { FileService } from 'src/app/services/file.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-inscription-phd',
  templateUrl: './inscription-phd.component.html',
  styleUrls: ['./inscription-phd.component.css'],
})
export class InscriptionPhdComponent implements OnInit{
  selectedBacFile?: File;
  selectedCinFile?: File;
  selectedCvFile?: File;
  selectedImageFile?: File;
  selectedLicenseFile?: File;
  selectedMasterFile?: File;

  ngOnInit(): void {
    this.getsubjects();
  }
  FormInscriptionForm: InscriptionForm = new InscriptionForm;
  firstFormGroup = this._formBuilder.group({
    Nom: ['', Validators.required],
    Prenom: ['', Validators.required],
    etat: ['', Validators.required],
    DateN: ['', Validators.required],
    Lieux: ['', Validators.required],
    Pays: ['', Validators.required],
    Nationalite: ['', Validators.required],
    ProfessionP: ['', Validators.required],
    ProfessionM: ['', Validators.required],
    Sexe: ['', Validators.required],
    CIN: ['', Validators.required],
    CNE: ['', Validators.required],
    Profession: ['', Validators.required],
    Organisme: ['', Validators.required],
    Adresse: ['', Validators.required],
    Telephone: ['', Validators.required],
    Email: ['', Validators.required],

  });
  secondsFormGroup = this._formBuilder.group({
    specialte: ['', Validators.required],
    dateO: ['', Validators.required],
    Lycee: ['', Validators.required],
    Academie: ['', Validators.required],
    Mention: ['', Validators.required],
  });
  therdFormGroup = this._formBuilder.group({
    specialte: ['', Validators.required],
    date: ['', Validators.required],
    Etablissement: ['', Validators.required],
    Universitie: ['', Validators.required],
    Pays: ['', Validators.required],
    Mention: ['', Validators.required],
  });

  FourthFormGroup = this._formBuilder.group({
    specialte: ['', Validators.required],
    date: ['', Validators.required],
    Etablissement: ['', Validators.required],
    Universitie: ['', Validators.required],
    Pays: ['', Validators.required],
    Mention: ['', Validators.required],
  });

  fiveFormGroup = this._formBuilder.group({
    specialte: ['', Validators.required],
    date: ['', Validators.required],
    Etablissement: ['', Validators.required],
    Pays: ['', Validators.required],
    Mention: ['', Validators.required],
  });
  SixeFormGroup = this._formBuilder.group({
    Langue1: ['', Validators.required],
    Niveau1: ['', Validators.required],
    Langue2: ['', Validators.required],
    Niveau2: ['', Validators.required],
    Langue3: ['', Validators.required],
    Niveau3: ['', Validators.required],
    Langue4: ['', Validators.required],
    Niveau4: ['', Validators.required],
  });

  sevenFormGroup = this._formBuilder.group({
    Etablissement1: ['', Validators.required],
    Fonction1: ['', Validators.required],
    Periodec1: ['', Validators.required],
    Periodef1: ['', Validators.required],
    Etablissement2: ['', Validators.required],
    Fonction2: ['', Validators.required],
    Periodec2: ['', Validators.required],
    Periodef2: ['', Validators.required],
    Etablissement3: ['', Validators.required],
    Fonction3: ['', Validators.required],
    Periodec3: ['', Validators.required],
    Periodef3: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    ced: ['', Validators.required],

  });
  nineFormGroup = this._formBuilder.group({
    Choix1: ['', Validators.required],
    Choix2: ['', Validators.required],

  });
  isLinear = false;

  constructor(private router: Router,private _formBuilder: FormBuilder,private subjectService: SubjectService,private studentservice: StudentService,
    private fileService:FileService) {

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
  logFormValues(step: number) {
    // Check if the form is valid
    switch (step) {
      case 1:
        this.FormInscriptionForm.nom = this.firstFormGroup.get("Nom")?.value ?? 'Default Value';
        this.FormInscriptionForm.prenom = this.firstFormGroup.get("Prenom")?.value ?? 'Default Value';
        this.FormInscriptionForm.etatCivil =parseInt(this.firstFormGroup.get("etat")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.dateDeNaissance = this.changeformdate(this.firstFormGroup.get("DateN")?.value ?? 'Default Value');
        this.FormInscriptionForm.lieuDeNaissance = this.firstFormGroup.get("Lieux")?.value ?? 'Default Value';
        this.FormInscriptionForm.paysDeNaissance = this.firstFormGroup.get("Pays")?.value ?? 'Default Value';
        this.FormInscriptionForm.nationalite = this.firstFormGroup.get("Nationalite")?.value ?? 'Default Value';
        this.FormInscriptionForm.professionDePere =parseInt(this.firstFormGroup.get("ProfessionP")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.professionDeMere =parseInt(this.firstFormGroup.get("ProfessionM")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.sexe = parseInt(this.firstFormGroup.get("Sexe")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.cne = this.firstFormGroup.get("CNE")?.value ?? 'Default Value';
        this.FormInscriptionForm.cin = this.firstFormGroup.get("CIN")?.value ?? 'Default Value';
        this.FormInscriptionForm.profession = parseInt(this.firstFormGroup.get("Profession")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.organismeEmployeur = this.firstFormGroup.get("Organisme")?.value ?? 'Default Value';
        this.FormInscriptionForm.adresseDeCorrespondance = this.firstFormGroup.get("Adresse")?.value ?? 'Default Value';
        this.FormInscriptionForm.telephone = this.firstFormGroup.get("Telephone")?.value ?? 'Default Value';
        this.FormInscriptionForm.email = this.firstFormGroup.get("Email")?.value ?? 'Default Value';
          console.log('Step 1:', this.FormInscriptionForm);

        break;
      case 2:
        this.FormInscriptionForm.bacspecialite = this.secondsFormGroup.get("specialte")?.value ?? 'Default Value';
        this.FormInscriptionForm.bacdateDobtention = this.changeformdate(this.secondsFormGroup.get("dateO")?.value ?? 'Default Value');
        this.FormInscriptionForm.bacmention = parseInt(this.secondsFormGroup.get("Mention")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.lycee = this.secondsFormGroup.get("Lycee")?.value ?? 'Default Value';
        this.FormInscriptionForm.academie = this.secondsFormGroup.get("Academie")?.value ?? 'Default Value';
        console.log('Step 1:', this.FormInscriptionForm);

      break;
      case 3:

      this.FormInscriptionForm.licencespecialite = this.therdFormGroup.get("specialte")?.value ?? 'Default Value';
      this.FormInscriptionForm.licencedateDobtention =this.changeformdate( this.therdFormGroup.get("date")?.value ?? 'Default Value');
      this.FormInscriptionForm.licencemention = parseInt(this.therdFormGroup.get("Mention")?.value ?? 'Default Value',10) ;
      this.FormInscriptionForm.licenseetablissement = this.therdFormGroup.get("Etablissement")?.value ?? 'Default Value';
      this.FormInscriptionForm.licenceunivertiste = this.therdFormGroup.get("Universitie")?.value ?? 'Default Value';
      this.FormInscriptionForm.licencepaysDobtention = this.therdFormGroup.get("Pays")?.value ?? 'Default Value';
      console.log('Step 1:', this.FormInscriptionForm);

        break;
      case 4:

      this.FormInscriptionForm.masterspecialite = this.FourthFormGroup.get("specialte")?.value ?? 'Default Value';
      this.FormInscriptionForm.masterdateDobtention = this.changeformdate(this.FourthFormGroup.get("date")?.value ?? 'Default Value');
      this.FormInscriptionForm.mastermention = parseInt(this.FourthFormGroup.get("Mention")?.value ?? 'Default Value',10) ;
      this.FormInscriptionForm.masteretablissement = this.FourthFormGroup.get("Etablissement")?.value ?? 'Default Value';
      this.FormInscriptionForm.masterunivertiste = this.FourthFormGroup.get("Universitie")?.value ?? 'Default Value';
      this.FormInscriptionForm.masterpaysDobtention = this.FourthFormGroup.get("Pays")?.value ?? 'Default Value';
      console.log('Step 1:', this.FormInscriptionForm);

        break;
      case 5:

      this.FormInscriptionForm.option = this.fiveFormGroup.get("specialte")?.value ?? 'Default Value';
      this.FormInscriptionForm.dateDobtention = this.changeformdate(this.fiveFormGroup.get("date")?.value ?? 'Default Value');
      this.FormInscriptionForm.mention = parseInt(this.fiveFormGroup.get("Mention")?.value ?? 'Default Value',10) ;
      this.FormInscriptionForm.etablissement = this.fiveFormGroup.get("Etablissement")?.value ?? 'Default Value';
      this.FormInscriptionForm.paysDobtention = this.fiveFormGroup.get("Pays")?.value ?? 'Default Value';
      console.log('Step 1:', this.FormInscriptionForm);

        break;
      case 6:

      this.FormInscriptionForm.langue1 = this.SixeFormGroup.get("Langue1")?.value ?? 'Default Value';
      this.FormInscriptionForm.niveau1 = parseInt(this.SixeFormGroup.get("Niveau1")?.value ?? 'Default Value',10) ;
      this.FormInscriptionForm.langue2 = this.SixeFormGroup.get("Langue2")?.value ?? 'Default Value';
      this.FormInscriptionForm.niveau2 = parseInt(this.SixeFormGroup.get("Niveau2")?.value ?? 'Default Value',10) ;
      this.FormInscriptionForm.langue3 = this.SixeFormGroup.get("Langue3")?.value ?? 'Default Value';
      this.FormInscriptionForm.niveau3 = parseInt(this.SixeFormGroup.get("Niveau3")?.value ?? 'Default Value',10) ;
      this.FormInscriptionForm.langue4 = this.SixeFormGroup.get("Langue3")?.value ?? 'Default Value';
      this.FormInscriptionForm.niveau4 = parseInt(this.SixeFormGroup.get("Niveau3")?.value ?? 'Default Value',10) ;
      console.log('Step 1:', this.FormInscriptionForm);

        break;
      case 7:

      this.FormInscriptionForm.etablissement1 = this.sevenFormGroup.get("Etablissement1")?.value ?? 'Default Value';
      this.FormInscriptionForm.fonction1 = this.sevenFormGroup.get("Fonction1")?.value ?? 'Default Value';
      this.FormInscriptionForm.periodeCommence1 = this.changeformdate(this.sevenFormGroup.get("Periodec1")?.value ?? 'Default Value');
      this.FormInscriptionForm.periodeFin1 =this.changeformdate( this.sevenFormGroup.get("Periodef1")?.value ?? 'Default Value');
      this.FormInscriptionForm.etablissement2 = this.sevenFormGroup.get("Etablissement2")?.value ?? 'Default Value';
      this.FormInscriptionForm.fonction2 = this.sevenFormGroup.get("Fonction2")?.value ?? 'Default Value';
      this.FormInscriptionForm.periodeCommence2 = this.changeformdate(this.sevenFormGroup.get("Periodec2")?.value ?? 'Default Value');
      this.FormInscriptionForm.periodeFin2 = this.changeformdate(this.sevenFormGroup.get("Periodef2")?.value ?? 'Default Value');
      this.FormInscriptionForm.etablissement3 = this.sevenFormGroup.get("Etablissement3")?.value ?? 'Default Value';
      this.FormInscriptionForm.fonction3 = this.sevenFormGroup.get("Fonction3")?.value ?? 'Default Value';
      this.FormInscriptionForm.periodeCommence3 = this.changeformdate(this.sevenFormGroup.get("Periodec3")?.value ?? 'Default Value');
      this.FormInscriptionForm.periodeFin3 =this.changeformdate( this.sevenFormGroup.get("Periodef3")?.value ?? 'Default Value');

      console.log('Step 1:', this.FormInscriptionForm);
        break;
      case 8:

      this.FormInscriptionForm.ced = parseInt(this.eightFormGroup.get("ced")?.value ?? 'Default Value',10) ;

      console.log('Step 1:', this.FormInscriptionForm);
        break;
      case 9:
        this.FormInscriptionForm.choix1 = parseInt(this.nineFormGroup.get("Choix1")?.value ?? 'Default Value',10) ;
        this.FormInscriptionForm.choix2 =parseInt(this.nineFormGroup.get("Choix2")?.value ?? 'Default Value',10) ;
        console.log('Step 1:', this.FormInscriptionForm);

        break;
       case 10:
        
        this.fileService.saveFile(localStorage.getItem('userId') || '', this.selectedBacFile!,
        this.selectedImageFile!, this.selectedCvFile!, this.selectedLicenseFile!,
        this.selectedImageFile!, this.selectedCinFile!).subscribe();
      break;
        case 11:
             const idrh = localStorage.getItem('userId') as unknown as number;
             this.FormInscriptionForm.idstudent=idrh;
             this.studentservice.Inscrire(this.FormInscriptionForm);   
             this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/students']);
            });        
        break;

    }
  }

  allSubjects: allSubjects[] = [];
  getsubjects(){
    this.subjectService.Getallsubjects().subscribe((res) => {
     this.allSubjects=res;
     console.log(this.allSubjects)
    });
  }
  @ViewChild('fileInput') fileInput!: ElementRef ;
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      // You can now safely access inputElement.files
      const selectedFile = inputElement.files[0];
      console.log('Selected file:', selectedFile);
    }
  }

  selectBacFile(event:any) {
    this.selectedBacFile = event.target.files[0];
    console.log(this.selectedBacFile);
  }

  selectCinFile(event:any) {
    this.selectedCinFile = event.target.files[0];
  }

  selectCvFile(event:any) {
    this.selectedCvFile = event.target.files[0];
  }

  selectImageFile(event:any) {
    this.selectedImageFile = event.target.files[0];
  }

  selectLicenseFile(event:any) {
    this.selectedLicenseFile = event.target.files[0];
  }

  selectMasterFile(event:any) {
    this.selectedMasterFile = event.target.files[0];
  }

}
