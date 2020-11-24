import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NotifyService } from './services/notify.service';

@NgModule({
    exports: [
        CommonModule,

    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    providers: [
        NotifyService
    ]


})
export class SharedModule { }
