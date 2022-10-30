import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthEndpoints } from '../../shared/services/endpoints/auth.endpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {


  loginForm!: FormGroup;
  submitted = false;
  error = '';
  // set the currenr year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder, private _authEndpoints: AuthEndpoints, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      userNameOrEmailAddress: ['admin', [Validators.required]],
      password: ['123qwe', [Validators.required]],
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    const loginData = {
      userNameOrEmailAddress: this.f['userNameOrEmailAddress'].value,
      password: this.f['password'].value
    };

    

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //   this._authEndpoints.postTokenAuthAuthenticate(loginData)
    //     .pipe(first())
    //     .subscribe(
    //       data => {
    //         this.router.navigate(['/']);
    //         console.log(data.result.accessToken)
    //         sessionStorage.setItem('access_token', data.result.accessToken)
    //         // localStorage.setItem('access_token', data.result.accessToken)

    //       },
    //       error => {
    //         this.error = error ? error : '';
    //       });

      // this._authEndpoints.postTokenAuthAuthenticate(loginData).subscribe(user => {
      //   console.log(user)
      // })

    // }



  }
  // onSubmit(e: any) {
  //   this._authEndpoints.postTokenAuthAuthenticate({
  //     userNameOrEmailAddress: e.form.value.userNameOrEmailAddress,
  //     password: e.form.value.password,
  //   }).subscribe((data) => {
  //     console.log("data ", data);

  //   })
  // }
}
