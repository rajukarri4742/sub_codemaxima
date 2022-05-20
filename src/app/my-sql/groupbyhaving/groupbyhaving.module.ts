import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { GroupbyComponent } from './groupby/groupby.component';
import { Groupby2Component } from './groupby2/groupby2.component';
import { Groupby3Component } from './groupby3/groupby3.component';
import { Groupby4Component } from './groupby4/groupby4.component';
import { HavingComponent } from './having/having.component';
import { Having1Component } from './having1/having1.component';
import { Having2Component } from './having2/having2.component';
import { Having3Component } from './having3/having3.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PredataComponent,
    GroupbyComponent,
    Groupby2Component,
    Groupby3Component,
    Groupby4Component,
    HavingComponent,
    Having1Component,
    Having2Component,
    Having3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/groupbyhaving/predata', component:  PredataComponent},
      { path: 'my-sql/groupbyhaving/groupby', component:  GroupbyComponent},
      { path: 'my-sql/groupbyhaving/groupby2', component:  Groupby2Component},
      { path: 'my-sql/groupbyhaving/groupby3', component:  Groupby3Component},
      { path: 'my-sql/groupbyhaving/groupby4', component:  Groupby4Component},
      { path: 'my-sql/groupbyhaving/having', component:  HavingComponent},
      { path: 'my-sql/groupbyhaving/having1', component:  Having1Component},
      { path: 'my-sql/groupbyhaving/having2', component:  Having2Component},
      { path: 'my-sql/groupbyhaving/having3', component:  Having3Component}
    ])
  ]
})
export class GroupbyhavingModule { }
