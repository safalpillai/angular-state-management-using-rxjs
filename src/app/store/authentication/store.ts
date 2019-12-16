import { Injectable } from "@angular/core";
import { IAuth, IAction } from 'src/app/models/authentication.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthActions } from './actions';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    initialState: IAuth;
    authStore: BehaviorSubject<IAuth>;
    authEventDispatcher: Subject<IAction>;
    
    constructor() {
        this.initialState = this.getInitialState();
        this.authStore = new BehaviorSubject<IAuth>(this.getInitialState());
        this.authEventDispatcher = new Subject<IAction>();
    }

    // set initial state
    getInitialState(): IAuth {
        return {
            username: '',
            refreshToken: '',
            accessToken: ''
        }
    }

    ngOnInit() {
        // catch action dispatchers
        this.authEventDispatcher.subscribe(({type, payload}: IAction) => {
            switch (type) {
                case AuthActions.LOGIN:
                    this.authStore.next(payload);
                    break;
                case AuthActions.LOGOUT:
                    this.authStore.next(this.getInitialState());
                    break;
            }
        });
    }
}