import { TestBed, inject, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { reginaldoazevedojr } from '../mock/user.mock';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('authentication API', async(inject([AuthService], (service: AuthService) => {
    service.oauthAuth(reginaldoazevedojr.username, reginaldoazevedojr.password).then((result: any) => {
      const accessToken = result.hasOwnProperty('access_token');
      expect(accessToken).toBe(true);
    });
  })));
});
