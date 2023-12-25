import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentsDto } from '../model/studentsdto';
import { Consulter } from '../model/ConsulterStudent';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL
  private tokenKey = 'authToken';
  private teacherIdKey = 'teacherId';
  private teacherId : number = 0;

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/teachers`);
  }

  Getallstudentdto(): Observable<any> {
    const idteacher = localStorage.getItem('teacherId') as unknown as number;
    const id=idteacher;
    return this.http.get<studentsDto>(`${this.apiUrl}/phd/students/${id}`);
  }
  consulterStudent(id: number): Observable<any> {
    return this.http.get<Consulter>(`${this.apiUrl}/phd/students/consulter/${id}`);
  }

  getTeacherById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/teachers/${id}`);
  }

  accepter(userId:number, choixId:number) {
    return this.http.post(`${this.apiUrl}/phd/accepter/${userId}/${choixId}`,{});
  }

  refuser(userId:number, choixId:number) {
    return this.http.post(`${this.apiUrl}/phd/refuser/${userId}/${choixId}`,{});
  }

  initializeAuthState(): void {
    console.log('Initializing auth state...');
    const token = this.getAuthToken();
    console.log('Token:', token);
    if (token) {
      console.log('User is authenticated.');
      console.log(this.teacherId)
      this.setAuthToken(token);
    } else {
      console.log('User is not authenticated.');
    }
  }
  setAuthToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    return !!token; // Check if token exists
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.teacherId = 0;
  }

  setCurrentTeacherId(id: number): void {
    localStorage.setItem(this.teacherIdKey, id.toString());
    console.log('Teacher ID set to:', id);
  }


  getCurrentTeacherId(): number{
    const storedId = localStorage.getItem(this.teacherIdKey);
    if (storedId) {
      const teacherId = parseInt(storedId, 10); // Parse the stored ID as an integer
      console.log('Teacher ID: (get)', teacherId);
      return teacherId;
    } else {
      return 0;
    }
  }
  sendEmail(emailDetails: { to: string; subject: string; body: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, emailDetails);
  }
  
}
