import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntoductionComponent } from './intoduction/intoduction.component';
import { NotnullComponent } from './notnull/notnull.component';
import { UniqueComponent } from './unique/unique.component';
import { PrimarykeyComponent } from './primarykey/primarykey.component';
import { ForeignkeyComponent } from './foreignkey/foreignkey.component';
import { CheckComponent } from './check/check.component';
import { DefaultComponent } from './default/default.component';
import { CreateindexComponent } from './createindex/createindex.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IntoductionComponent,
    NotnullComponent,
    UniqueComponent,
    PrimarykeyComponent,
    ForeignkeyComponent,
    CheckComponent,
    DefaultComponent,
    CreateindexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/constraints/intoduction', component: IntoductionComponent },
      { path: 'my-sql/constraints/notnull', component: NotnullComponent },
      { path: 'my-sql/constraints/unique', component: UniqueComponent },
      { path: 'my-sql/constraints/default', component: DefaultComponent },
      { path: 'my-sql/constraints/primarykey', component: PrimarykeyComponent },
      { path: 'my-sql/constraints/check', component: CheckComponent },
      { path: 'my-sql/constraints/foreignkey', component: ForeignkeyComponent },
      { path: 'my-sql/constraints/createindex', component: CreateindexComponent }
    ])
  ]
})
export class ConstraintsModule { }
