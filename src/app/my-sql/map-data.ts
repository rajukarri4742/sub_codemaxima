import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySqlMapData {

  readonly chapters = [
    {
      name: "SQL-Introduction",
      lessons: [
        
      ],
    },
    {
      name: "Database",
      lessons: [

        { name:"Create Database / Schema", url: "my-sql/database/create"},
        { name:"Select Database / Schema", url: "my-sql/database/selectdatabase"},
        { name:"Delete Database / Schema", url: "my-sql/database/deletedatabase"}
      ],
    },
    {
      name: "Tables",
      lessons: [

        { name:"Create Table", url: "my-sql/tables/createtable"},
        { name:"Create Table-2", url: "my-sql/tables/example2"},
        { name:"Create Table-3", url: "my-sql/tables/example3"},
        { name:"Create Table-4", url: "my-sql/tables/example4"},
        { name:"Drop Table", url: "my-sql/tables/droptable"},
        { name:"Delete Table", url: "my-sql/tables/delete"},
        { name:"Alter Table-1", url: "my-sql/tables/altertable1"},
        { name:"Alter Table-2", url: "my-sql/tables/altrtable2"},
        { name:"Clone Table", url: "my-sql/tables/clonetable"}
      ],
    },
    {
      name: "Insert Data",
      lessons: [

        { name:"Prerequisite Data", url: "my-sql/insertdata/predata"},
        { name:"Insert Data Into Table", url: "my-sql/insertdata/insertdata"},
        { name:"Insert Data-2", url: "my-sql/insertdata/example2"},
        { name:"Insert Data-3", url: "my-sql/insertdata/example3"},
        { name:"Insert Data-4", url: "my-sql/insertdata/example4"},
        { name:"Insert Data-5", url: "my-sql/insertdata/example5"},
        { name:"Insert Data-6", url: "my-sql/insertdata/example6"}
      ],
    },
    {
      name: "Select Data",
      lessons: [
        { name:"Prerequisite Data", url: "my-sql/selectdata/predata"},
        { name:"Simple Select", url: "my-sql/selectdata/simpleselect"},
        { name:"Select with Where", url: "my-sql/selectdata/selectwhere"},
        { name:"Select Data-1", url: "my-sql/selectdata/example1"},
        { name:"Select Data-2", url: "my-sql/selectdata/example2"},
        { name:"Select Data-3", url: "my-sql/selectdata/example3"},
        { name:"Select Data-4", url: "my-sql/selectdata/example4"}
      ],
    },
    {
      name: "Constraints",
      lessons: [

        { name:"Introduction",url: "my-sql/constraints/intoduction"},
        { name:"NOTNULL",url: "my-sql/constraints/notnull"},
        { name:"UNIQUE",url: "my-sql/constraints/unique"},
        { name:"DEFAULT",url: "my-sql/constraints/default"},
        { name:"PRIMARY KEY",url: "my-sql/constraints/primarykey"},
        { name:"CHECK",url: "my-sql/constraints/check"},
        { name:"FOREIGN KEY",url: "my-sql/constraints/foreignkey"},
        { name:"CREATE INDEX",url: "my-sql/constraints/createindex"}
      ],
    },
    {
      name: "Update Data",
      lessons: [

        { name:"Prerequisite Data", url: 'my-sql/updatedata/predata'},
        { name:"UPDATE Query", url: 'my-sql/updatedata/update'},
        { name:"Update with where", url: 'my-sql/updatedata/updatewhere'},
        { name:"Update Data-1", url: 'my-sql/updatedata/updatedata1'},
        { name:"Update Data-2", url: 'my-sql/updatedata/updatedata2'},
        { name:"Update Data-3", url: 'my-sql/updatedata/updatedata3'},
        { name:"Update Data-4", url: 'my-sql/updatedata/updatedata4'}
      ],
    },
    {
      name: "Delete Data",
      lessons: [
        { name:"Prerequisite Data", url: "my-sql/deletedata/predata"},
        { name:"DELETE Query", url: "my-sql/deletedata/deletedata"},
        { name:"Delete with where", url: "my-sql/deletedata/deletedatawhere"},
        { name:"Delete Data-1", url: "my-sql/deletedata/deletedata1"},
        { name:"Delete Data-2", url: "my-sql/deletedata/deletedata2"},
        { name:"Delete Data-3", url: "my-sql/deletedata/deletedata3"}
      ],
    },
    {
      name: "Aggregate Functions",
      lessons: [
        { name:"Prerequisite Data",url: "my-sql/aggregatefunctions/predata"},
        { name:"MIN() (and) MAX() ",url: "my-sql/aggregatefunctions/minmax"},
        { name:"COUNT()",url: "my-sql/aggregatefunctions/count"},
        { name:"SUM()",url: "my-sql/aggregatefunctions/sum"},
        { name:"AVG()",url: "my-sql/aggregatefunctions/avg"}
      ],
    },
    {
      name: "Operators",
      lessons: [
        { name:"Prerequisite Data", url: "my-sql/operators/predata"},
        { name:"LIKE", url: "my-sql/operators/like"},
        { name:"IN", url: "my-sql/operators/in"},
        { name:"BETWEEN", url: "my-sql/operators/between"},
        { name:"Arithmetic Operators", url: "my-sql/operators/arthematic"},
        { name:"Logical Operators", url: "my-sql/operators/logical"}
      ],
    },
    {
      name: "GroupBy, Having, Union, Exist",
      lessons: [
        { name:"Prerequisite Data", url: "my-sql/groupbyhaving/predata"},
        { name:"GROUP BY", url: "my-sql/groupbyhaving/groupby"},
        { name:"GROUP BY - Example 2", url: "my-sql/groupbyhaving/groupby2"},
        { name:"GROUP BY - Example 3", url: "my-sql/groupbyhaving/groupby3"},
        { name:"GROUP BY - Example 4", url: "my-sql/groupbyhaving/groupby4"},
        { name:"HAVING", url: "my-sql/groupbyhaving/having"},
        { name:"HAVING - Example 2", url: "my-sql/groupbyhaving/having1"},
        { name:"HAVING - Example 3", url: "my-sql/groupbyhaving/having2"},
        { name:"HAVING - Example 4", url: "my-sql/groupbyhaving/having3"}
      ],
    },
    {
      name: "Sortings",
      lessons: [

        {  name:"Prerequisite Data", url: "my-sql/sortings/predata"},
        {  name:"ORDER BY", url: "my-sql/sortings/orderby"},
        {  name:"EXAMPLE - 1", url: "my-sql/sortings/example1"},
        {  name:"EXAMPLE - 2", url: "my-sql/sortings/example2"},
        {  name:"EXAMPLE - 3", url: "my-sql/sortings/example3"},
        {  name:"EXAMPLE - 4", url: "my-sql/sortings/example4"},
        {  name:"EXAMPLE - 5", url: "my-sql/sortings/example5"}
      ],
    },
    {
      name: "Relation Mapping",
      lessons: [

        { name:"Anomalies in DBMS", url: "my-sql/relations/anomalies"},
        { name:"One-To-One Relation Mapping", url: "my-sql/relations/onetoone"},
        { name:"One-To-Many Relation Mapping", url: "my-sql/relations/onetomany"},
        { name:"Many-To-Many Relation Mapping", url: "my-sql/relations/manytomany"},
        { name:"One-To-One Example-2", url: "my-sql/relations/onetoone2"},
        { name:"One-To-One Example-3", url: "my-sql/relations/onetoone3"},
        { name:"One-To-Many Example-2", url: "my-sql/relations/onetomany2"},
        { name:"One-To-Many Example-3", url: "my-sql/relations/oneotmanye"},
        { name:"Many-To-Many Example-2", url: "my-sql/relations/manytomany2"},
        { name:"Many-To-Many Example-3", url: "my-sql/relations/manytomany3"}
      ],
    },
    {
      name: "JOINS",
      lessons: [
        { name:"JOIN Example-1", url: "my-sql/joins/joinexample1"},
        { name:"JOIN Example-2", url: "my-sql/joins/joinexample2"},
        { name:"JOIN Example-3", url: "my-sql/joins/joinexample3"},
        { name:"JOIN Example-4", url: "my-sql/joins/joinexample4"},
        { name:"JOIN Example-5", url: "my-sql/joins/joinexample5"},
        { name:"JOIN Example-6", url: "my-sql/joins/joinexample6"}
      ],
    },
    {
      name: "INDEX",
      lessons: [
      ],
    },
    {
      name: "Paging/Pagination",
      lessons: [
      ],
    },
  ];

}
