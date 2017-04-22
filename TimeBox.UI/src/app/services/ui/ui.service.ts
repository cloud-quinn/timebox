import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class UiService {

  constructor() { 

  }

  autofocus(id?: string) {
    let input = id ? document.getElementById(id) : document.getElementsByTagName('input')[0];
    if (input) {
        input.focus();
    }
  }

}
