import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../shared/services/notify.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loggedInUser;
  constructor(public router: Router, public notifyService: NotifyService) {

    this.loggedInUser = JSON.parse(localStorage.getItem('user'))

  }

  ngOnInit() {


  }

  logout() {
    localStorage.clear();
    this.notifyService.showWarning('You are Logged Out')

    this.router.navigate(['auth/login']);
  }


}
