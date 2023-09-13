import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getTeacherById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/teachers/${id}`);
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
}