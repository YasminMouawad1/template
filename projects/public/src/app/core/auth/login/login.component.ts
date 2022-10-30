import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEndpoints } from '../../../shared/services/endpoints/auth.endpoint.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  error = '';
  token: string|undefined;
  // set the currenr year
  year: number = new Date().getFullYear();
  constructor(private formBuilder: FormBuilder, private _authEndpoints: AuthEndpoints, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userNameOrEmailAddress: ['admin', [Validators.required]],
      password: ['12345', [Validators.required]],
    });

  }

  get f() { return this.loginForm.controls; }


  public sendCaptcha(form: NgForm): boolean {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return false;
    }
  return true;
  }

   onSubmit(form: NgForm) {
    this.submitted = true;

    const loginData = {
      MobileNumber: this.f['userNameOrEmailAddress'].value,
      Password: this.f['password'].value
    };

    if (this.loginForm.invalid || !this.sendCaptcha(form)) {
      return;
    } else {
    this._authEndpoints.postTokenAuthAuthenticate(loginData)
        .subscribe(
         ( res:any) => {
            
            this.router.navigate(['layout']);

            sessionStorage.setItem('access_token', res.data)

          },
          error => {
            this.error = error ? error : '';
          });
    }

  }

}
