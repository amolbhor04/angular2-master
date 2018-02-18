import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCompoent } from './user.compoent';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user', component: UserCompoent }
    ])
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }
