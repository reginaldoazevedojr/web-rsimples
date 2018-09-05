import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AuthService as AuthOauthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public constructor(
    private translate: TranslateService,
    private socialAuthService: AuthService,
    private authSvc: AuthOauthService
  ) {
    translate.addLangs(['en', 'pt-br']);
    translate.setDefaultLang('pt-br');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en/) ? browserLang : 'pt-br');
  }

  public ngOnInit() {
  }

  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;

    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(user => {
      console.log(user);
    });
  }

  public login(username: string, password: string) {
    this.authSvc.oauthAuth(username, password).then((result) => {
      console.log(result);
    });
  }

}
