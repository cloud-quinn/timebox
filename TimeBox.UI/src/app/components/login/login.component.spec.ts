import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { LoginComponent } from './login.component';
import { HeadingComponent } from '../heading/heading.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Login } from '../../models/login';
import { UserService } from '../../services/user/user.service';
import { UiService } from '../../services/ui/ui.service';
import { NotificationService } from '../../services/notification/notification.service';
import * as config from '../../app.config';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitButton: DebugElement;
  let usernameInput: DebugElement;
  let passwordInput: DebugElement;
  let mockUserService = <UserService> { };
  let mockUiService = <UiService> { autofocus: function() { } }
  let mockNotificationService = <NotificationService> { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule ],
      declarations: [ LoginComponent, HeadingComponent ],
      providers: [MockBackend, BaseRequestOptions, { provide: UserService, useValue: mockUserService }, 
      { provide: UiService, useValue: mockUiService }, 
      { provide: NotificationService, useValue: mockNotificationService }, { provide: Http,
      useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions] } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitButton = fixture.debugElement.query(By.css('button#login-submit-button'));
    usernameInput = fixture.debugElement.query(By.css('input#login-username-input'));
    passwordInput = fixture.debugElement.query(By.css('input#login-password-input'));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a heading`, async(() => {
    const c = fixture.debugElement.componentInstance;
    expect(c.heading).toBeDefined();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBeDefined();
  }));

  it('should define a form', async(() => {
    const c = fixture.debugElement.componentInstance;
    expect(c.login).toBeDefined();
  }));

  it('should display a form', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeDefined();
  }));

  describe('Log in logic', () => {
      beforeEach(() => { 
        const c = fixture.debugElement.componentInstance;
        c.router = {
          navigate: jasmine.createSpy('navigate')
        }
        c.userService = mockUserService;
        c.notificationService = {
          showNotification: jasmine.createSpy('showNotification')
        }
      });

      it('should navigate to home if login is successful', async(() => {
        const c = fixture.debugElement.componentInstance;
        c.userService.authenticate = jasmine.createSpy('authenticate').and.returnValue(Observable.of({ success: true, message: 'Logged in' }));
        c.submit(new Login('test', 'test'))
        expect(c.router.navigate).toHaveBeenCalledWith(['/']);
      }));

      it('should not navigate to home if login is unsuccessful', async(() => {
        const c = fixture.debugElement.componentInstance;
        c.userService.authenticate = jasmine.createSpy('authenticate').and.returnValue(Observable.of({ success: false, message: 'Login failed' }));
        c.submit(new Login('invalid', 'invalid'))
        expect(c.router.navigate).not.toHaveBeenCalled();
      }));
  });

});