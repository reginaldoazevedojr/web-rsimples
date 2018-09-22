import { TestBed, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { OauthUsers } from '../entity/oauth-users';
import { Person } from '../entity/person';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('set session oauth user', inject([StorageService], (service: StorageService) => {
    const oauth = new OauthUsers();
    const person = new Person();

    person.email = 'test@gmail.com';
    person.firstName = 'Test';
    person.lastName = 'Silva';
    person.personId = 1;

    oauth.person = person;
    oauth.username = person.email;

    service.setUserSession(oauth)

    const oauthSession = service.getUserSession();

    expect(oauthSession instanceof OauthUsers).toBe(true);
  }));
});
