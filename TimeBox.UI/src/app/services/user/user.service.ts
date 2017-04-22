import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { Session } from '../../models/session';
import * as moment from 'moment';
import * as config from '../../app.config';

@Injectable()
export class UserService {

    currentSession: Session; 
    api: string;
    loggedInSubject = new Subject<boolean>();
    loginEvent = this.loggedInSubject.asObservable();

    constructor(private http: Http,
                private router: Router)
    { 
      this.currentSession = this.getCurrentSession();
      this.api = config.apiBaseUrl + config.apiSections.user.path;
  	}

    authenticate(login: Login): Observable<any>  {     
        return Observable.create(authenticated => {
           this.http.post(this.api + config.apiPaths.authenticate.path, login).map(res => res.json()).subscribe((res) => {
           this.currentSession = new Session(res.userId, res.token, res.expires, res.adminUser);
           let loggedIn = this.currentSession && this.sessionValid(this.currentSession.expires);
           let message = res.message;
           this.setCurrentSession(this.currentSession);
           this.loggedInSubject.next(loggedIn);
           authenticated.next({ loggedIn: loggedIn, message: message });
        });
      });
    }

    getCurrentSession(): Session {
      let session = JSON.parse(localStorage.getItem('currentSession'));
      session = session ? session : {};
      return new Session(session.userId, session.token, session.expires, session.adminUser);
    }

    setCurrentSession(session: Session) {
      localStorage.setItem('currentSession', JSON.stringify(new Session(session.userId, session.token, session.expires)));
    }

    clearCurrentSession() {
      localStorage.removeItem('currentSession');
    }

    sessionValid(sessionExpires) {
      return sessionExpires && moment().isBefore(moment(sessionExpires));
    }

    loggedIn() {
      return this.sessionValid(this.getCurrentSession().expires);
    }
}
