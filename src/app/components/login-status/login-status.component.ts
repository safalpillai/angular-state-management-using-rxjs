import { Component, OnInit } from '@angular/core';
import { AuthenticationStateService } from 'src/app/store/authentication/auth.state.service';

@Component({
    selector: 'app-login-status',
    templateUrl: './login-status.component.html',
    styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {
    loginStatus: string;

    constructor(
        private authStateService: AuthenticationStateService,
    ) {}

    ngOnInit() {
        this.authStateService.authStore.subscribe(value => {
            this.loginStatus = value.isLoggedIn.toString().toUpperCase();
        });
    }

}
