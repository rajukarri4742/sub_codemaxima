import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashBoardComponent } from './user-dashboard-component/user-dashboard.component';
import { CoursesNavbarComponent } from './courses-navbar-component/courses-navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserDashBoardComponent,
    CoursesNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:"user-dash-board", component:UserDashBoardComponent},
    ])
  ],
  exports: [
    UserDashBoardComponent,
    CoursesNavbarComponent
  ]
})
export class UserDashBoardModule { }
