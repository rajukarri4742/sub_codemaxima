import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectintroComponent } from './objectintro/objectintro.component';
import { ClassintroComponent } from './classintro/classintro.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { HouseComponent } from './house/house.component';
import { HumanComponent } from './human/human.component';
import { StoreComponent } from './store/store.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ObjectintroComponent,
    ClassintroComponent,
    StudentComponent,
    EmployeeComponent,
    HouseComponent,
    HumanComponent,
    StoreComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([

      { path: 'core-java/objectclass/objectintro', component:ObjectintroComponent},
      { path: 'core-java/objectclass/classintro', component:ClassintroComponent  },
      { path: 'core-java/objectclass/student', component:StudentComponent  },
      { path: 'core-java/objectclass/employee', component:EmployeeComponent  },
      { path: 'core-java/objectclass/house', component:HouseComponent  },
      { path: 'core-java/objectclass/human', component:HumanComponent  },
      { path: 'core-java/objectclass/store', component:StoreComponent  },
      { path: 'core-java/objectclass/city', component:CityComponent  },
    ])
  ]
})
export class ObjectclassModule { }
