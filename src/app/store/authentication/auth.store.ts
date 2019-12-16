import { Injectable } from "@angular/core";
import { IAuth, IAction } from 'src/app/models/authentication.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthActions } from './actions';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationStateService{
    initialState: IAuth;
    authStore: BehaviorSubject<IAuth>;
    authActionDispatcher: Subject<IAction>;

    constructor() {
        console.log('auth store initialised');
        this.initialState = this.getInitialState();
        localStorage.getItem('user')
            ? this.authStore = new BehaviorSubject<IAuth>(JSON.parse(localStorage.getItem('user')))
            : this.authStore = new BehaviorSubject<IAuth>(this.getInitialState());
        this.authActionDispatcher = new Subject<IAction>();
        // catch authentication action dispatches
        this.authActionDispatcher.subscribe((action: IAction) => {
            switch (action.type) {
                case AuthActions.LOGIN:
                    console.log(`type=${action.type} payload=${JSON.stringify(action.payload)}`);
                    this.authStore.next(action.payload);
                    this.loginUser(action.payload);
                    break;
                case AuthActions.LOGOUT:
                    console.log(`type=${action.type} payload=${JSON.stringify(action.payload)}`);
                    this.authStore.next(this.getInitialState());
                    this.logoutUser();
                    break;
            }
        });
    }

    // set initial state
    getInitialState(): IAuth {
        return {
            username: '',
            refreshToken: '',
            accessToken: ''
        }
    }
    
    // persist user in local storage
    loginUser(user: IAuth) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    // remove user from local storage on logout
    logoutUser() {
        localStorage.removeItem('user');
    }

    // check login status
    isLoggedIn(): boolean {
        return localStorage.getItem('user') ? true : false;
    }
}