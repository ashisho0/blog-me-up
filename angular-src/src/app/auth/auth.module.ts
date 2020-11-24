import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { NotifyService } from '../shared/services/notify.service';



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ],
    providers: [
        AuthService, NotifyService
    ]
})
export class AuthModule { }
