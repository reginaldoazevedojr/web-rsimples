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
    const userJson = JSON.parse(sessionStorage.getItem('user'));
    const oauthUser = new OauthUsers();

    if (!userJson) {
      return null;
    }

    Object.assign(oauthUser, userJson);
    return oauthUser;
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
