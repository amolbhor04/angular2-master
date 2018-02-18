import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { StudentModule } from './student/student.module';
import { userModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

//import { LoginComponent } from './student/login.component';
//import { StudentRoutes } from './student/student.route';
//import { RouterModule } from '@angular/router';

//import { UserCompoent } from './user/user.compoent';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, AboutModule, HomeModule, StudentModule,
    userModule, SharedModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
