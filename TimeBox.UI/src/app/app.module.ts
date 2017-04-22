import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HeadingComponent } from './components/heading/heading.component';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';

@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      LoginComponent,
      HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
