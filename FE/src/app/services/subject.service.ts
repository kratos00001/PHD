import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscriptionForm } from '../model/InscriptionForm';
import { allSubjects } from '../model/AllSubjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL

  constructor(private http: HttpClient) {
    this.Getallsubjects().subscribe(
      (data: allSubjects[]) => {
        this.AllSubjects = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllSubjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/subjects`);
  }

  getSubjectById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/subjects/${id}`);
  }

  createSubject(subject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/subjects`, subject);
  }

  updateSubject(id: number, subject: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/subjects/${id}`, subject);
  }

  deleteSubject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/subjects/${id}`);
  }
  AllSubjects:allSubjects[]=[]
  Getallsubjects(): Observable<any> {
    return this.http.get<allSubjects>(`${this.apiUrl}/phd/subjects`);
  }
}
