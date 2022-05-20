import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdbranchmngComponent } from './stdbranchmng/stdbranchmng.component';
import { EmpdesgmngComponent } from './empdesgmng/empdesgmng.component';
import { AptflatmngComponent } from './aptflatmng/aptflatmng.component';
import { ClgbranchmngComponent } from './clgbranchmng/clgbranchmng.component';
import { TeachersubmngComponent } from './teachersubmng/teachersubmng.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StdbranchmngComponent,
    EmpdesgmngComponent,
    AptflatmngComponent,
    ClgbranchmngComponent,
    TeachersubmngComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'core-java/managementsystem/stdbranchmng', component:StdbranchmngComponent},
      { path: 'core-java/managementsystem/clgbranchmng', component:ClgbranchmngComponent},
      { path: 'core-java/managementsystem/empdesgmng', component:EmpdesgmngComponent},
      { path: 'core-java/managementsystem/teachersubmng', component:TeachersubmngComponent},
      { path: 'core-java/managementsystem/aptflatmng', component:AptflatmngComponent}
    ])
  ]
})
export class ManagementsystemsModule { }
