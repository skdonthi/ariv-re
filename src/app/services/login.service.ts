import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  /* public loginUser(data: { username: string; password: string }) {
    return this.httpClient.post(
      `${environment.apiUrl}/auth/login`,
      data, { observe: 'response', withCredentials: true}
    ).pipe(
      map(response => this.authService.addToken(response.body)),
    );
  }

  public loginWithCode(data: any) {
    return this.httpClient.post(
      `${environment.apiUrl}/auth/passcode/login`,
      data, { observe: 'response', withCredentials: false}
    ).pipe(
      map(response => this.authService.addToken(response.body)),
    );
  } */
}
