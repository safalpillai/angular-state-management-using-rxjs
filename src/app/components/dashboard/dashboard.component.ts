import { Component, OnInit } from '@angular/core';
import { AuthenticationStateService } from 'src/app/store/authentication/auth.store';

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
        this.authStateService.authStore.subscribe(value => this.username = value.username);
        this.loginStatus = this.authStateService.isLoggedIn().toString();
    }

}
