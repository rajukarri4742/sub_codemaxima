import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { MinmaxComponent } from './minmax/minmax.component';
import { CountComponent } from './count/count.component';
import { AvgComponent } from './avg/avg.component';
import { SumComponent } from './sum/sum.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PredataComponent,
    MinmaxComponent,
    CountComponent,
    AvgComponent,
    SumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/aggregatefunctions/predata', component: PredataComponent},
      { path: 'my-sql/aggregatefunctions/minmax', component: MinmaxComponent},
      { path: 'my-sql/aggregatefunctions/count', component: CountComponent},
      { path: 'my-sql/aggregatefunctions/sum', component: SumComponent},
      { path: 'my-sql/aggregatefunctions/avg', component: AvgComponent}
    ])
  ]
})
export class AggregatefunctionsModule { }
