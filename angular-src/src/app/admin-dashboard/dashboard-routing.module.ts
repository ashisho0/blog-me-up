import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components import
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';
import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';


const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent,
        children: [
            {
                path: 'article',
                component: ViewArticlesComponent,
            },

            {
                path: 'article/add',
                component: AddArticleComponent
            },
            {
                path: 'article/edit/:id',
                component: EditArticleComponent
            },
            {
                path: 'user',
                component: ViewUsersComponent
            },

            {
                path: 'user/add',
                component: AddUserComponent
            },
            {
                path: 'user/edit/:id',
                component: EditUserComponent
            },
            {
                path: 'profile/edit/:id',
                component: EditMyProfileComponent
            },
            {
                path: 'profile/:id',
                component: ViewMyProfileComponent
            },

        ]
    },

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
