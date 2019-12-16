import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationStateService } from 'src/app/store/authentication/auth.store';
import { IAuth } from 'src/app/models/authentication.model';
import { AuthActions } from 'src/app/store/authentication/actions';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authStateService: AuthenticationStateService,
        private router: Router,
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    onSubmit(formValue) {
        const payload: IAuth = {
            username: formValue.username,
            refreshToken: 'staticRefreshToken',
            accessToken: 'staticAccessToken'
        };
        this.authStateService.authActionDispatcher.next({ type: AuthActions.LOGIN, payload });
        this.router.navigate(['/dashboard']);
    }

}
