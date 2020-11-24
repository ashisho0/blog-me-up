import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-my-profile',
  templateUrl: './view-my-profile.component.html',
  styleUrls: ['./view-my-profile.component.scss']
})
export class ViewMyProfileComponent implements OnInit {
  loggedInUser;


  constructor() {
    this.loggedInUser = JSON.parse(localStorage.getItem('user'))
    // console.log('Logged in user in view my profile',this.loggedInUser)

   }

  ngOnInit() {
  }

}
