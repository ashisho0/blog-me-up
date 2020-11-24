import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user;
  constructor(public authService: AuthService, public notifyService: NotifyService, public router: Router) {
    this.user = new User({});
  }

  ngOnInit() {
  }

  register() {
    // console.log('User---->', this.user)
    this.authService.register(this.user)
      .subscribe((data) => {
        console.log('Registered User---->', data)
        this.notifyService.showSuccess('Registration successfull')
        this.router.navigate(['/auth/login'])
      }, (err) => {
        console.log('error from register.component.ts', err)

      })

  }





}
