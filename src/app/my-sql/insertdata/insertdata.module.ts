import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PredataComponent } from './predata/predata.component';



@NgModule({
  declarations: [
    InsertdataComponent,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/insertdata/predata', component: PredataComponent },
      { path: 'my-sql/insertdata/insertdata', component: InsertdataComponent },
      { path: 'my-sql/insertdata/example2', component: Example2Component },
      { path: 'my-sql/insertdata/example3', component: Example3Component },
      { path: 'my-sql/insertdata/example4', component: Example4Component },
      { path: 'my-sql/insertdata/example5', component: Example5Component },
      { path: 'my-sql/insertdata/example6', component: Example6Component }
    ])
  ]
})
export class InsertdataModule { }
