import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL
  private tokenKey = 'appToken';


  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/students`);
  }
  registerUser(newUser: any): Observable<any> {
    const cne = newUser.cne;
    return this.http.put(`${this.apiUrl}/api/students/cne/${cne}`, newUser);
  }
  
  initializeAuthState(): void {
    console.log('Initializing auth state...');
    const token = this.getAuthToken();
    console.log('Token:', token);
    if (token) {
      console.log('User is authenticated.');
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
  }
}
