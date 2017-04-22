import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  //@Input() organisationName: string;
  //@Input() userName: string;
  heading = 'Welcome ' //+ this.userName;

  constructor() {
      //if (this.organisationName && this.organisationName.length > 0) {
      //    this.heading += ' (' + this.organisationName + ')';
      //}
  }

  ngOnInit() {
      console.log('home')
  }

}
