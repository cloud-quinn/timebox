import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';
import * as config from '../../app.config';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router)
    { }

    canActivate() {
        let session = this.userService.getCurrentSession();
        if (!session || !this.userService.sessionValid(session.expires)) {
            this.router.navigate([config.uiPaths.login.path]);
            return false;
        }
        return true;
    }

}