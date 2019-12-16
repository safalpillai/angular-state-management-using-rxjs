import { Component, OnInit } from '@angular/core';
import { AuthenticationStateService } from 'src/app/store/authentication/auth.store';
import { IAuth } from 'src/app/models/authentication.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    username: string;
    loginStatus: string;

    constructor(private authStateService: AuthenticationStateService) { }

    ngOnInit() {
        this.authStateService.authStore.subscribe((value: IAuth) => this.username = value.username);
        this.loginStatus = this.authStateService.isLoggedIn().toString();
    }

}
