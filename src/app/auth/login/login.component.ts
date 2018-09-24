import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AuthService as AuthOauthService} from '../../service/auth.service';
import { StorageService } from '../../service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public linkHome = ['main', 'dashboard'];

  public loginForm: FormGroup;

  public username: FormControl;

  public constructor(
    private translate: TranslateService,
    private socialAuthService: AuthService,
    private authSvc: AuthOauthService,
    private storageSvc: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    translate.addLangs(['en', 'pt-br']);
    translate.setDefaultLang('pt-br');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en/) ? browserLang : 'pt-br');

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public ngOnInit() {
    const oauth = this.storageSvc.getUserSession();

    this.activatedRoute.queryParams.subscribe((params: any) => {
      let url = null;
      if (params.hasOwnProperty('url')) {
        url = params.url;
      }
      if (oauth) {
        if (url) {
          this.router.navigate(url.split('/'));
          return null;
        }
        this.router.navigate(this.linkHome);
      }
    });
  }

  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;

    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(socialUser => {
      this.authSvc.oauthSocialAuth(socialUser).then((result) => {
        this.router.navigate(this.linkHome);
      }).catch(error => {
        this.translate.get('LOGIN.MESSAGE_ERROR_LOGIN_SOCIAL').subscribe(message => {
          this.snackBar.open(message, 'Login', {
            duration: 2000,
          });
        });
      });
    });
  }

  public login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authSvc.oauthAuth(username, password).then((result) => {
      this.router.navigate(this.linkHome);
    }).catch((error) => {
      this.translate.get('LOGIN.MESSAGE_ERROR_LOGIN').subscribe(message => {
        this.snackBar.open(message, 'Login', {
          duration: 2000,
        });
      });
    });
  }

}
