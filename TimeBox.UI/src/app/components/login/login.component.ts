import { Component, OnInit, Input, Output, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { Session } from '../../models/session';
import { UserService } from '../../services/user/user.service';
import { UiService } from '../../services/ui/ui.service';
import { NotificationService } from '../../services/notification/notification.service';
import * as config from '../../app.config';
import * as _ from 'lodash';

@Component({
  selector: 'login',
  providers: [ UserService, UiService, NotificationService ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  heading = config.uiPaths.login.title;
  login: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              private uiService: UiService,
              private notificationService: NotificationService)
  { }

  ngOnInit() {
      console.log('login')
  	this.login = new FormGroup({
  	  username: new FormControl('', Validators.required),
  	  password: new FormControl('', Validators.required)
  	})
  }

  ngAfterViewInit() {
    this.uiService.autofocus();
  }

  submit({ value, valid }: { value: Login, valid: boolean }) {
    this.userService.authenticate(value).subscribe(res => 
    {
        let icon = res.success ? config.icons.success : config.icons.failure;
        this.notificationService.showNotification(res.success, false, res.message, icon);
        if (res.success) {
          this.router.navigate(['/']); 
        }
      }
    );
  }
}
