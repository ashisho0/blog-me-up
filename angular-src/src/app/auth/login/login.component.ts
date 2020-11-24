import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;
  loggedInUser;

  constructor(public router: Router, public notifyService: NotifyService, public authService: AuthService) {
    this.user = new User({})
    this.loggedInUser = {}

  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user)
      .subscribe((data: any) => {
        console.log("Data of logged in user--->", data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.loggedInUser = data

        let isLoggedIn = true;

        this.notifyService.showSuccess('You are Logged In')
        this.router.navigate(['/admin'])

      }, (err) => {
        this.notifyService.showInfo('Username or password doesnot match')
        console.log(err)

      })

  }
}
