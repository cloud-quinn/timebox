import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { UserService } from './user.service';
import { LoginComponent } from '../../components/login/login.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { Login } from '../../models/login';

describe('User Service', () => {

    let testSession = { userId: '12345', token: 'validtoken', expires: '2050-01-01T00:00:00.000Z', username: 'Test' };
    let testLogin = new Login('test', 'P@55w0rd');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule, RouterTestingModule],
            providers: [UserService, MockBackend, BaseRequestOptions, {
                provide: Http,
                useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backendInstance, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            }]
        })
    });

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    describe('Get current session logic', () => {
        it('should return an object', inject([UserService], (service: UserService) => {
            service.setCurrentSession(testSession);
            expect(service.getCurrentSession()).toBeDefined();
        }));

        it('should return a Session object', inject([UserService], (service: UserService) => {
            service.setCurrentSession(testSession);
            expect(service.getCurrentSession().token).toBeDefined();
        }));

    });

    describe('Set current session logic', () => {
        it('should set the value of the current session property', inject([UserService], (service: UserService) => {
            service.setCurrentSession(testSession);
            expect(service.currentSession.token).toEqual('validtoken');
        }));
    });

    describe('Clear current session logic', () => {
        beforeEach(inject([UserService], (service: UserService) => {
            spyOn(localStorage, "removeItem");
            service.clearCurrentSession();
        }));

        it('should remove the current session from local storage', () => {
            expect(localStorage.removeItem).toHaveBeenCalledWith('currentSession');
        });
    });

    describe('Session valid logic', () => {
        it('should return false if no expiry time is passed', inject([UserService], (service: UserService) => {
            expect(service.sessionValid(null)).toBeFalsy();
        }));

        it('should return false if an expiry time in the past is passed', inject([UserService], (service: UserService) => {
            expect(service.sessionValid("2017-01-01T00:00:00.000Z")).toBeFalsy();
        }));

        it('should return true if an expiry time in the future is passed', inject([UserService], (service: UserService) => {
            expect(service.sessionValid("2050-01-01T00:00:00.000Z")).toBeTruthy();
        }));
    });

    describe('Authenticate logic', () => {
        it('should return a new session if this user is successfully logged in', inject([UserService, MockBackend], (service: UserService, backend: MockBackend) => {
            let response = new ResponseOptions({
                body: JSON.stringify({ isValid: true, message: 'Logged in', token: testSession.token, userId: testSession.userId, expires: testSession.expires })
            });

            const baseResponse = new Response(response);

            backend.connections.subscribe(
                (c: MockConnection) => c.mockRespond(baseResponse)
            );

            return service.authenticate(testLogin).subscribe(data => {
                expect(data).toBeDefined();
                expect(data.loggedIn).toBeTruthy();
                expect(data.message).toEqual('Logged in');
            });
        }));

        it('should not return a new session if this user is not successfully logged in', inject([UserService, MockBackend], (service: UserService, backend: MockBackend) => {
            let response = new ResponseOptions({
                body: JSON.stringify({ isValid: false, message: 'Login failed' })
            });

            const baseResponse = new Response(response);

            backend.connections.subscribe(
                (c: MockConnection) => c.mockRespond(baseResponse)
            );

            return service.authenticate(testLogin).subscribe(data => {
                expect(data).toBeDefined();
                expect(data.loggedIn).toBeFalsy();
                expect(data.message).toEqual('Login failed');
            });
        }));
    });
});
