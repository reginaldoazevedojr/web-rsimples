import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../material-module';
import { RegisterComponent } from './register/register.component';
import { getAuthServiceConfigs } from '../../auth-service-social';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AuthRoutingModule,
    SocialLoginModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class AuthModule { }
