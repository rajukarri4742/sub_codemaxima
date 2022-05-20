import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnomaliesComponent } from './anomalies/anomalies.component';
import { OnetooneComponent } from './onetoone/onetoone.component';
import { OnetomanyComponent } from './onetomany/onetomany.component';
import { ManytomayComponent } from './manytomay/manytomay.component';
import { Onetoone2Component } from './onetoone2/onetoone2.component';
import { Onetoone3Component } from './onetoone3/onetoone3.component';
import { Onetomay2Component } from './onetomay2/onetomay2.component';
import { Oneotmany3Component } from './oneotmany3/oneotmany3.component';
import { Manytomany2Component } from './manytomany2/manytomany2.component';
import { Manytomany3Component } from './manytomany3/manytomany3.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManytomanyComponent } from 'src/app/hibernate/practicals/manytomany/manytomany.component';



@NgModule({
  declarations: [
    AnomaliesComponent,
    OnetooneComponent,
    OnetomanyComponent,
    ManytomayComponent,
    Onetoone2Component,
    Onetoone3Component,
    Onetomay2Component,
    Oneotmany3Component,
    Manytomany2Component,
    Manytomany3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/relations/anomalies', component: AnomaliesComponent},
      { path: 'my-sql/relations/onetoone', component: OnetooneComponent},
      { path: 'my-sql/relations/onetomany', component: OnetomanyComponent},
      { path: 'my-sql/relations/manytomany', component: ManytomanyComponent},
      { path: 'my-sql/relations/onetoone2', component: Onetoone2Component},
      { path: 'my-sql/relations/onetoone3', component: Onetoone3Component},
      { path: 'my-sql/relations/onetomany2', component: Onetomay2Component},
      { path: 'my-sql/relations/oneotmanye', component: Oneotmany3Component},
      { path: 'my-sql/relations/manytomany2', component: Manytomany2Component},
      { path: 'my-sql/relations/manytomany3', component: Manytomany3Component}
    ])
  ]
})
export class RelationsModule { }
