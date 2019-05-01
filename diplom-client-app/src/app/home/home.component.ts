import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services';

import {Role, User } from '../_models';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    currentUser: User;

    constructor(private authenticationService: AuthenticationService
        ) 
        {
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }

    get isStudent() {
        return this.currentUser.role == Role.Student;
    }
    ngOnInit(){
        
    }
}