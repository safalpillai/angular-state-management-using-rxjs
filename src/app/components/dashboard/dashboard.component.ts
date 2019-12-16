import { Component, OnInit } from '@angular/core';
import { AuthenticationStateService } from 'src/app/store/authentication/auth.state.service';
import { IAuth } from 'src/app/models/authentication.model';
import { AuthActions } from 'src/app/store/authentication/actions';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    username: string;
    loginStatus: string;

    constructor(
        private authStateService: AuthenticationStateService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.authStateService.authStore.subscribe((value: IAuth) => this.username = value.username);
        this.loginStatus = this.authStateService.isLoggedIn().toString();
    }

    logout() {
        this.authStateService.authActionDispatcher.next({ type: AuthActions.LOGOUT });
        this.router.navigate(['/login']);
    }

}
