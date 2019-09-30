import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/AuthGuard';
import { LoginComponent } from './login/login.component';
import { TimeExpensesComponent } from './_routePageComponent/time-expenses/time-expenses.component';



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'leaveexpenses', component: TimeExpensesComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);