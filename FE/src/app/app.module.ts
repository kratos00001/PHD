import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { TeachersHomeComponent } from './components/teachers-home/teachers-home.component';
import { StudentsHomeComponent } from './components/students-home/students-home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from './components/login/login.component';
import { ApplicationComponent } from './components/application/application.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './guards/login.guard';
import { AppGuard } from './guards/application.guard';
import { BlockGuard } from './guards/block.guard';
import { TeacherService } from './services/teacher.service';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectCreateComponent } from './components/subject-create/subject-create.component';
import { SubjectUpdateComponent } from './components/subject-update/subject-update.component';
import { TeachersNavbarComponent } from './components/teachers-navbar/teachers-navbar.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { InscriptionPhdComponent } from './components/inscription-phd/inscription-phd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DescriptionSubjectComponent } from './components/description-subject/description-subject.component';
import { ConsulterStudentComponent } from './components/consulter-student/consulter-student.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CustomRouteReuseStrategy } from './routing';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [BlockGuard]},
  { path: 'teachers', component: TeachersHomeComponent, canActivate: [BlockGuard]},
  { path: 'students', component: StudentsHomeComponent},
  { path: 'inscription', component: InscriptionPhdComponent,
  data: {
    reuseComponent: true
  }},
  { path: 'student/consulter/:id', component: ConsulterStudentComponent},
  { path: 'descriptionSub/:id', component: DescriptionSubjectComponent},
  { path: 'calendar', component: CalendarComponent, canActivate: [BlockGuard]},
  { path: 'login', component: LoginComponent, canActivate: [BlockGuard]},
  { path: 'application', component: ApplicationComponent, canActivate: [BlockGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [BlockGuard]},
  { path: 'subjects', component: SubjectListComponent, canActivate: [LoginGuard]},
  { path: 'subjects/create', component: SubjectCreateComponent, canActivate: [LoginGuard]},
  { path: 'subjects/update/:id', component: SubjectUpdateComponent, canActivate: [LoginGuard]},
  { path: 'applications', component: ApplicationListComponent, canActivate: [LoginGuard]},
  { path: '**', redirectTo: '' , canActivate: [BlockGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersHomeComponent,
    StudentsHomeComponent,
    CalendarComponent,
    LoginComponent,
    ApplicationComponent,
    RegisterComponent,
    SubjectListComponent,
    SubjectCreateComponent,
    SubjectUpdateComponent,
    TeachersNavbarComponent,
    ApplicationListComponent,
    InscriptionPhdComponent,
    DescriptionSubjectComponent,
    ConsulterStudentComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],

  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private teacherService: TeacherService, private studentService: TeacherService) {
    if (this.teacherService.isAuthenticated()) {
      this.teacherService.initializeAuthState();
    }
    if (this.studentService.isAuthenticated()) {
      this.studentService.initializeAuthState();
    }
  }
 }
