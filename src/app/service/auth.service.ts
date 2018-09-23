import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SocialUser } from 'angularx-social-login/src/entities/user';
import { StorageService } from './storage.service';
import { OauthUsers } from '../entity/oauth-users';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public constructor(private http: HttpClient, private storageSvc: StorageService) { }

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
      .then((result: any) => {
        if (result.hasOwnProperty('error')) {
          Promise.reject(result);
        }
        this.storageSvc.setAuthorizationToken(result.access_token);
        this.userSession().then((userJson) => {
          const user = new OauthUsers();
          Object.assign(user, userJson);
          this.storageSvc.setUserSession(user);
        });
        return result;
      }).catch((error) => {
        throw error;
    });
  }

  public oauthSocialAuth(socialUser: SocialUser) {
    return this.http
      .post(
        environment.apiHost + '/oauth-social',
        JSON.stringify(
          {
            grant_type: 'password',
            client_id: environment.clientId,
            client_secret: environment.clientSecret,
            username: socialUser.email,
            password: '--',
            socialUser: socialUser
          }
        ),
        this.httpOptions
      )
      .toPromise()
      .then((result: any) => {
        this.storageSvc.setAuthorizationToken(result.access_token);
        this.userSession().then((userJson) => {
          const user = new OauthUsers();
          Object.assign(user, userJson);
          this.storageSvc.setUserSession(user);
        });
        return result;
      }).catch((error) => {
        return error;
      });
  }

  public userSession() {
    return this.http
      .get(environment.apiHost + '/user-session').toPromise().then((result) => {
        return result;
      }).catch((error) => {
        return error;
      });
  }
}
