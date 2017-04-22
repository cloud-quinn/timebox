import { Injectable } from '@angular/core';
import * as config from '../../app.config';

@Injectable()
export class NotificationService {

  text: string;
  toast: boolean;
  show: boolean;
  confirm: boolean;
  icon: string;

  constructor()
  { }

  setText(input: string) {
  	
  }

  showNotification(toast: boolean, confirm: boolean, text: string, icon: string = config.icons.information) {

  }

  close(userConfirmed: boolean) {

  }
}
