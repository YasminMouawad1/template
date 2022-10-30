import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../services/interceptor/auth-interceptor.service';
 
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'projects/public/src/environments/environment';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } ,
    {provide: RECAPTCHA_SETTINGS, useValue: { siteKey: environment.recaptcha.siteKey } as RecaptchaSettings,}
  ],
})
export class AuthModule { }
