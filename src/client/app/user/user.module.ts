import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserCompoent } from './user.compoent';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [UserRoutingModule, SharedModule],
    declarations: [UserCompoent],
    exports: [UserCompoent]
})

export class userModule {

}
