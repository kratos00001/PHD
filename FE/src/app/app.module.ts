import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
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
import { TeacherService } from './services/teacher.service';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectCreateComponent } from './components/subject-create/subject-create.component';
import { SubjectUpdateComponent } from './components/subject-update/subject-update.component';
import { TeachersNavbarComponent } from './components/teachers-navbar/teachers-navbar.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';

const appRoutes: Routes = [   
  { path: '', component: HomeComponent},
  { path: 'teachers', component: TeachersHomeComponent},
  { path: 'students', component: StudentsHomeComponent },
  { path: 'calendar', component: CalendarComponent, canActivate: [LoginGuard]},   
  { path: 'login', component: LoginComponent },
  { path: 'application', component: ApplicationComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'subjects', component: SubjectListComponent, canActivate: [LoginGuard]},
  { path: 'subjects/create', component: SubjectCreateComponent, canActivate: [LoginGuard]},
  { path: 'subjects/update/:id', component: SubjectUpdateComponent, canActivate: [LoginGuard]},
  { path: 'applications', component: ApplicationListComponent, canActivate: [LoginGuard]},
  { path: '**', redirectTo: '' },
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
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
