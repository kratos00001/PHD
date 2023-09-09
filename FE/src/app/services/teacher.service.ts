import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/teachers`);
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

  getCurrentTeacherId(): string | null {
    const token = this.getAuthToken();
    if (token) {
      // Parse the token to extract teacher ID
      const tokenParts = token.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        console.log('Payload:', payload);
        if (payload.teacher && payload.teacher.id) {
          return payload.teacher.id;
        }
      }
    }
    return null;
  }
}
