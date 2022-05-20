import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { DeletedataComponent } from './deletedata/deletedata.component';
import { DeletewhereComponent } from './deletewhere/deletewhere.component';
import { Deletedata1Component } from './deletedata1/deletedata1.component';
import { Deletedata2Component } from './deletedata2/deletedata2.component';
import { Deletedata3Component } from './deletedata3/deletedata3.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PredataComponent,
    DeletedataComponent,
    DeletewhereComponent,
    Deletedata1Component,
    Deletedata2Component,
    Deletedata3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/deletedata/predata', component:  PredataComponent},
      { path: 'my-sql/deletedata/deletedata', component:  DeletedataComponent},
      { path: 'my-sql/deletedata/deletedatawhere', component:  DeletewhereComponent},
      { path: 'my-sql/deletedata/deletedata1', component:  Deletedata1Component},
      { path: 'my-sql/deletedata/deletedata2', component:  Deletedata2Component},
      { path: 'my-sql/deletedata/deletedata3', component:  Deletedata3Component}
    ])
  ]
})
export class DeletedataModule { }
