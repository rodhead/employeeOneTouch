import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
    name: string;
  }

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit{
    myControl = new FormControl();
  // options: User[] = [
  //   {name: 'Time Expenses'},
  //   {name: 'My Profile'},
  //   {name: 'Hiring Program'},
  //   {name: 'Time Expenses'},
  //   {name: 'My Profile'},
  //   {name: 'Time Expenses'},
  //   {name: 'My Profile'}
  // ];
  filteredOptions: Observable<User[]>;
    currentUser: User;
    ngOnInit() {
        // this.filteredOptions = this.myControl.valueChanges
        //   .pipe(
        //     startWith(''),
        //     map(value => typeof value === 'string' ? value : value.name),
        //     map(name => name ? this._filter(name) : this.options.slice())
        //   );
      }
    
      // displayFn(user?: User): string | undefined {
      //   return user ? user.name : undefined;
      // }
    
      // private _filter(name: string): User[] {
      //   const filterValue = name.toLowerCase();
    
      //   return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
      // }

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    timeExpensePage(){
      this.router.navigate(['/leaveexpenses']);
    }
    notificationRoute(){
      this.router.navigate(['/notification']);
    }
}