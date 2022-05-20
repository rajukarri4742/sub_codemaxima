import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntoComponent } from './into/into.component';
import { TableComponent } from './table/table.component';
import { ColumnComponent } from './column/column.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { RelationsComponent } from './relations/relations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IntoComponent,
    TableComponent,
    ColumnComponent,
    ConstraintsComponent,
    RelationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      {path:"hibernate/jpa/into", component:IntoComponent},
      {path:"hibernate/jpa/table", component:TableComponent},
      {path:"hibernate/jpa/column", component:ColumnComponent},
      {path:"hibernate/jpa/constraints", component:ConstraintsComponent},
      {path:"hibernate/jpa/relations", component:RelationsComponent}

    ])
  ]
})
export class JpaModule { }
