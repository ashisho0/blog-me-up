import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, public router: Router) { }


    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            return true
        }
        else {
            this.router.navigate(['auth/login'])
            return false
        }
    }
}
