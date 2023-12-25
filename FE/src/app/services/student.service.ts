import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscriptionForm } from '../model/InscriptionForm';

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

  getChoixOne() {
    const idrh = localStorage.getItem('userId') as unknown as number;
    const userId = idrh;
    return this.http.get(`${this.apiUrl}/phd/getStatusOneChoix/${userId}`);
  }

  getChoixTwo() {
    const idrh = localStorage.getItem('userId') as unknown as number;
    const userId = idrh;
    return this.http.get(`${this.apiUrl}/phd/getStatusTwoChoix/${userId}`);
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

   Inscrire(InscriptionForm:InscriptionForm){
     
     console.log(InscriptionForm);
      this.http.post(`${this.apiUrl}/phd/inscription`,InscriptionForm).subscribe();
  }
  


  getInscriptionStatut(){
    const idrh = localStorage.getItem('userId') as unknown as number;
    const idstudent=idrh;
    return this.http.get(`http://localhost:8080/phd/getStatusINSCRI/${idstudent}`)
  }
}
