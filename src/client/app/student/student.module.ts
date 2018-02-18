import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { StudentComponent } from './student.component';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../shared/shared.module';

//import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [StudentRoutingModule, SharedModule],
  declarations: [LoginComponent, StudentComponent],
  exports: [LoginComponent, StudentComponent]//,
  //providers: [NameListService]
})
export class StudentModule { }
