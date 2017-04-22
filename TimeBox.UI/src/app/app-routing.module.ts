import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HeadingComponent } from './components/heading/heading.component';
import { UserService } from './services/user/user.service';
import * as config from './app.config';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: config.uiPaths.login.path,
        component: LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
