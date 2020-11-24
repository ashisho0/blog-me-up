import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public notifyService: NotifyService, public router: Router) {

  }



  isLoggedIn() {
    return localStorage.getItem('token') ? true : false
  }

  logout() {
    localStorage.clear();
    this.notifyService.showWarning('You are Logged Out')

    this.router.navigate(['/']);
  }




  ngOnInit() {
  }

}
