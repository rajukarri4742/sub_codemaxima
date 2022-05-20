import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { SimpleselectComponent } from './simpleselect/simpleselect.component';
import { SelectwhereComponent } from './selectwhere/selectwhere.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PredataComponent,
    SimpleselectComponent,
    SelectwhereComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/selectdata/predata', component: PredataComponent },
      { path: 'my-sql/selectdata/simpleselect', component: SimpleselectComponent },
      { path: 'my-sql/selectdata/selectwhere', component: SelectwhereComponent },
      { path: 'my-sql/selectdata/example1', component: Example1Component },
      { path: 'my-sql/selectdata/example2', component: Example2Component },
      { path: 'my-sql/selectdata/example3', component: Example3Component },
      { path: 'my-sql/selectdata/example4', component: Example4Component }
    ])
  ]
})
export class SelectdataModule { }
