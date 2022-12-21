import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { currentUserInterface } from 'src/app/shared/types/currentuser.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { LoginRequestInterface } from '../types/login.request.interface';

import { RegisterRequestInterface } from '../types/register-request.interface';
import { currentUserInputInterface } from 'src/app/shared/types/current-user-input.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  getUser(response: AuthResponseInterface) {
    return response.user;
  }

  getCurrentUser(): Observable<currentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser));
  }

  register(data: RegisterRequestInterface): Observable<currentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface) {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(this.getUser)
    )
  }

  updatecurrentUser(data: currentUserInputInterface): Observable<currentUserInterface> {
    console.log(data);

    const url = `${environment.apiUrl}/user`;
    return this.http.put<AuthResponseInterface>(url, { user: data }).pipe(
      map(this.getUser),
      tap(data => console.log(data)
      )
    )
  }
}
