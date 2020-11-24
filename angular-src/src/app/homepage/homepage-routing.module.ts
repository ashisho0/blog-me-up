import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomepageComponent } from './homepage.component';


const homepageRoutes: Routes = [

    {
        path: '',
        component: HomepageComponent
    },

    {
        path: 'blog',
        component: AllBlogsComponent
    },

    {
        path: 'blog/:id',
        component: BlogPageComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(homepageRoutes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }
