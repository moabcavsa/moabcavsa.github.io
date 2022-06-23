import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertTemplate, AlertTemplatePopup, InserTaskPopup, popupTemplate, TaskShownModalData, ToastTemplate } from './Templates/Templates.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { AccountComponent } from './Account/account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginGuard } from './Services/LoginGuard.service';
import { SchedulerComponent } from './scheduler/scheduler.component';



const appRoutes: Routes = [
{
  path: 'showUser',
  component: UserPageComponent,
  canActivate: [LoginGuard]
},
{
  path: 'calendarUser',
  component:SchedulerComponent,
  canActivate:[LoginGuard]
}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    AlertTemplate,
    popupTemplate,
    AlertTemplatePopup,
    NavbarComponent,
    AccountComponent,
    UserPageComponent,
    SidebarComponent,
    SchedulerComponent,
    InserTaskPopup,
    ToastTemplate,
    TaskShownModalData
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
