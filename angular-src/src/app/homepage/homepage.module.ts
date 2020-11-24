import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

import { ArticleService } from '../admin-dashboard/services/article.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserService } from '../admin-dashboard/services/user.service';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AllBlogsComponent,
    BlogPageComponent

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgxSpinnerModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
  ],
  providers:[
    ArticleService,
    UserService
  ]
})
export class HomepageModule { }
