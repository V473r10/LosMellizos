import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: string, pass: string): Observable<any> {
    return this.http.get(environment.apiUrl + `auth/login?user=${user}&pass=${pass}`);
  }

  signup(nombre: string, apellido: string, email: string, pass: string): Observable<any> {
    return this.http.post(environment.apiUrl + 'auth/signup?', { nombre, apellido, email, pass });
  }

}
