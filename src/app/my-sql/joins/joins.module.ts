import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joinexample1Component } from './joinexample1/joinexample1.component';
import { Joinexample2Component } from './joinexample2/joinexample2.component';
import { Joinexample3Component } from './joinexample3/joinexample3.component';
import { Joinexample4Component } from './joinexample4/joinexample4.component';
import { Joinexample5Component } from './joinexample5/joinexample5.component';
import { Joinexample6Component } from './joinexample6/joinexample6.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    Joinexample1Component,
    Joinexample2Component,
    Joinexample3Component,
    Joinexample4Component,
    Joinexample5Component,
    Joinexample6Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/joins/joinexample1', component: Joinexample1Component},
      { path: 'my-sql/joins/joinexample2', component: Joinexample2Component},
      { path: 'my-sql/joins/joinexample3', component: Joinexample3Component},
      { path: 'my-sql/joins/joinexample4', component: Joinexample4Component},
      { path: 'my-sql/joins/joinexample5', component: Joinexample5Component},
      { path: 'my-sql/joins/joinexample6', component: Joinexample6Component}
    ])
  ]
})
export class JoinsModule { }
