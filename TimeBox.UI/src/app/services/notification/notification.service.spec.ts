import { TestBed, inject } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import * as config from '../../app.config';

describe('NotificationService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NotificationService ]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));

});
