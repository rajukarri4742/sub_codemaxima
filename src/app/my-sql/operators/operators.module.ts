import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredataComponent } from './predata/predata.component';
import { LikeComponent } from './like/like.component';
import { InComponent } from './in/in.component';
import { BetweenComponent } from './between/between.component';
import { ArthematicComponent } from './arthematic/arthematic.component';
import { LogicalComponent } from './logical/logical.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PredataComponent,
    LikeComponent,
    InComponent,
    BetweenComponent,
    ArthematicComponent,
    LogicalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/operators/predata', component: PredataComponent},
      { path: 'my-sql/operators/like', component: LikeComponent},
      { path: 'my-sql/operators/in', component: InComponent},
      { path: 'my-sql/operators/between', component: BetweenComponent},
      { path: 'my-sql/operators/arthematic', component: ArthematicComponent},
      { path: 'my-sql/operators/logical', component: LogicalComponent}
    ])
  ]
})
export class OperatorsModule { }
