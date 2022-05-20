import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SqlintroductionModule } from './sqlintroduction/sqlintroduction.module';
import { TablesModule } from './tables/tables.module';
import { InsertdataModule } from './insertdata/insertdata.module';
import { SelectdataModule } from './selectdata/selectdata.module';
import { ConstraintsModule } from './constraints/constraints.module';
import { UpdatedataModule } from './updatedata/updatedata.module';
import { DeletedataModule } from './deletedata/deletedata.module';
import { AggregatefunctionsModule } from './aggregatefunctions/aggregatefunctions.module';
import { OperatorsModule } from './operators/operators.module';
import { GroupbyhavingModule } from './groupbyhaving/groupbyhaving.module';
import { SortingsModule } from './sortings/sortings.module';
import { RelationsModule } from './relations/relations.module';
import { JoinsModule } from './joins/joins.module';
import { IndexModule } from './index/index.module';
import { SharedModule } from '../shared/shared.module';
import { DatabaseModule } from './database/database.module';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    SqlintroductionModule,
    TablesModule,
    InsertdataModule,
    SelectdataModule,
    ConstraintsModule,
    UpdatedataModule,
    DeletedataModule,
    AggregatefunctionsModule,
    OperatorsModule,
    GroupbyhavingModule,
    SortingsModule,
    RelationsModule,
    JoinsModule,
    IndexModule,
    JoinsModule,
    DatabaseModule
  ]
})
export class MySqlModule { }
