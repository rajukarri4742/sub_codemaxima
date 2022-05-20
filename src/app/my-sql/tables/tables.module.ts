import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatetableComponent } from './createtable/createtable.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { DroptableComponent } from './droptable/droptable.component';
import { DeletetableComponent } from './deletetable/deletetable.component';
import { AltertableComponent } from './altertable/altertable.component';
import { Altertable2Component } from './altertable2/altertable2.component';
import { ClonetableComponent } from './clonetable/clonetable.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CreatetableComponent,
    Example2Component,
    Example3Component,
    Example4Component,
    DroptableComponent,
    DeletetableComponent,
    AltertableComponent,
    Altertable2Component,
    ClonetableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([

      { path: 'my-sql/tables/createtable', component: CreatetableComponent },
      { path: 'my-sql/tables/example2', component: Example2Component },
      { path: 'my-sql/tables/example3', component: Example3Component },
      { path: 'my-sql/tables/example4', component: Example4Component },
      { path: 'my-sql/tables/droptable', component: DroptableComponent },
      { path: 'my-sql/tables/delete', component: DeletetableComponent },
      { path: 'my-sql/tables/altertable1', component: AltertableComponent },
      { path: 'my-sql/tables/altrtable2', component: Altertable2Component },
      { path: 'my-sql/tables/clonetable', component: ClonetableComponent }
    ])
  ]
})
export class TablesModule { }
