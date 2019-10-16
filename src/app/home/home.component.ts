import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
     homeVal=true;
    users: User[];

    constructor(private userService: UserService, private router:Router) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }

    timeExpensesPage(){
        this.homeVal=false;
        this.router.navigateByUrl("/leaveexpenses")
    }
}