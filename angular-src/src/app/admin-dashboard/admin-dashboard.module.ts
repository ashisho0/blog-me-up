import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { DashboardRoutingModule } from './dashboard-routing.module'

import { AdminDashboardComponent } from './admin-dashboard.component';

import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';

import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUsersComponent } from './view-users/view-users.component'


// services 

import { UserService } from './services/user.service'
import { ArticleService } from './services/article.service';
import { NotifyService } from '../shared/services/notify.service';
import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddArticleComponent,
    EditArticleComponent,
    ViewArticlesComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUsersComponent,
    EditMyProfileComponent,
    ViewMyProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [
    UserService,
    ArticleService,
    NotifyService
  ]

})

export class AdminDashboardModule { }
