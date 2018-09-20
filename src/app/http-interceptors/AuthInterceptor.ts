import { StorageService } from '../service/storage.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  /**
   * @param {StorageService} storageSvc
   */
  public constructor(private storageSvc: StorageService) {}

  /**
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.storageSvc.getAuthorizationToken();
    if (!authToken || authToken === undefined) {
      return next.handle(req);
    }

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });

    return next.handle(authReq);
  }
}
