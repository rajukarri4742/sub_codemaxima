import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { UpdateComponent } from './update/update.component';
import { UpdatewhereComponent } from './updatewhere/updatewhere.component';
import { Updatedata1Component } from './updatedata1/updatedata1.component';
import { Updatedata2Component } from './updatedata2/updatedata2.component';
import { Updatedata3Component } from './updatedata3/updatedata3.component';
import { Updatedata4Component } from './updatedata4/updatedata4.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PredataComponent,
    UpdateComponent,
    UpdatewhereComponent,
    Updatedata1Component,
    Updatedata2Component,
    Updatedata3Component,
    Updatedata4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/updatedata/predata', component: PredataComponent},
      { path: 'my-sql/updatedata/update', component: UpdateComponent},
      { path: 'my-sql/updatedata/updatewhere', component: UpdatewhereComponent},
      { path: 'my-sql/updatedata/updatedata1', component: Updatedata1Component},
      { path: 'my-sql/updatedata/updatedata2', component: Updatedata2Component},
      { path: 'my-sql/updatedata/updatedata3', component: Updatedata3Component},
      { path: 'my-sql/updatedata/updatedata4', component: Updatedata4Component}
    ])
  ]
})
export class UpdatedataModule { }
