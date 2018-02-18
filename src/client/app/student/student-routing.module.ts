import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { StudentComponent } from './student.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'student', component: StudentComponent }
    ])
  ],
  exports: [RouterModule]
})

export class StudentRoutingModule { }
