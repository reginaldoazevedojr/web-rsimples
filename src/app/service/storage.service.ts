import { Injectable } from '@angular/core';
import { OauthUsers } from '../entity/oauth-users';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  /**
   * @returns {any}
   */
  public getUserSession() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  /**
   * @param {OauthUsers} oauthUser
   */
  public setUserSession(oauthUser: OauthUsers) {
    sessionStorage.setItem('user', JSON.stringify(oauthUser));
  }

  /**
   * @returns {string | null}
   */
  public getAuthorizationToken() {
    return sessionStorage.getItem('token');
  }

  /**
   * @param {string} token
   */
  public setAuthorizationToken(token: string) {
    sessionStorage.setItem('token', token);
  }
}
