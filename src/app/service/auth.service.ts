import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public constructor(private http: HttpClient) { }

  public oauthAuth(username: string, password: string) {
    return this.http
      .post(
        environment.apiHost + '/oauth',
        JSON.stringify(
          {
            grant_type: 'password',
            client_id: environment.clientId,
            client_secret: environment.clientSecret,
            username,
            password
          }
        ),
        this.httpOptions
      )
      .toPromise()
      .then((res) => {
        return res;
      }).catch((error) => {
        console.log(error);
      });
  }
}
