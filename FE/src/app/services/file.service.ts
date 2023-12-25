import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:8080/phd';

  constructor(private http: HttpClient) {}

  saveFile(userId:string, bac: File, image: File,
    cv: File, master: File, license: File, cin: File): Observable<any> {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("bac", bac);
    formData.append("image", image);
    formData.append("cv", cv);
    formData.append("master", master);
    formData.append("license", license);
    formData.append("cin", cin);

      console.log(formData);
      console.log(bac);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }



  getFile(fileId: number) {
    const url = `${this.apiUrl}/file/${fileId}`;

  const httpOptions = {
    'responseType'  : 'arraybuffer' as 'json'
  };

return this.http.get<any>(url, httpOptions);
  }

}
