import { Component } from '@angular/core';
import { Role, User } from './_models';
import { AuthenticationService } from './_services';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
     currentUser: User;

    constructor(private authenticationService: AuthenticationService
        ) 
        {
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }

    get isStudent() {
        return this.currentUser.role == Role.Student;
    }
}

