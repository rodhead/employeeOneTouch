import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/AuthGuard';
import { LoginComponent } from './login/login.component';
import { TimeExpensesComponent } from './_routePageComponent/time-expenses/time-expenses.component';
import { NotificationComponent } from './_routePageComponent/notification/notification.component';
import { MyProfileComponent } from './_routePageComponent/my-profile/my-profile.component';



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'leaveexpenses', component: TimeExpensesComponent},
    { path: 'notification',component: NotificationComponent},
    { path: 'home/myprofile', component: MyProfileComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);