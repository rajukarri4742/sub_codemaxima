import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { OrderbyComponent } from './orderby/orderby.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PredataComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    OrderbyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/sortings/predata', component: PredataComponent },
      { path: 'my-sql/sortings/orderby', component: OrderbyComponent },
      { path: 'my-sql/sortings/example1', component: Example1Component },
      { path: 'my-sql/sortings/example2', component: Example2Component },
      { path: 'my-sql/sortings/example3', component: Example3Component},
      { path: 'my-sql/sortings/example4', component: Example4Component },
      { path: 'my-sql/sortings/example5', component: Example5Component }
    ])
  ]
})
export class SortingsModule { }
