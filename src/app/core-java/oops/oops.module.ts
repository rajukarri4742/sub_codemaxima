import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncaptulationComponent } from './encaptulation/encaptulation.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { Inheritanceexample1Component } from './inheritanceexample1/inheritanceexample1.component';
import { Inheritanceexample2Component } from './inheritanceexample2/inheritanceexample2.component';
import { Inheritanceexample3Component } from './inheritanceexample3/inheritanceexample3.component';
import { PolymorphisamComponent } from './polymorphisam/polymorphisam.component';
import { AbstractionComponent } from './abstraction/abstraction.component';
import { AbstractclassComponent } from './abstractclass/abstractclass.component';
import { InterfaceComponent } from './interface/interface.component';
import { AbsitrComponent } from './absitr/absitr.component';
import { MultipleinhertanceComponent } from './multipleinhertance/multipleinhertance.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EncaptulationComponent,
    InheritanceComponent,
    Inheritanceexample1Component,
    Inheritanceexample2Component,
    Inheritanceexample3Component,
    PolymorphisamComponent,
    AbstractionComponent,
    AbstractclassComponent,
    InterfaceComponent,
    AbsitrComponent,
    MultipleinhertanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'core-java/oops/encaptulation', component:EncaptulationComponent},
      { path: 'core-java/oops/inheritance', component:InheritanceComponent},
      { path: 'core-java/oops/inheritanceexample1', component:Inheritanceexample1Component},
      { path: 'core-java/oops/inheritanceexample2', component:Inheritanceexample2Component},
      { path: 'core-java/oops/inheritanceexample3', component:Inheritanceexample3Component},
      { path: 'core-java/oops/abstraction', component:AbstractionComponent},
      { path: 'core-java/oops/abstractclass', component:AbstractclassComponent},
      { path: 'core-java/oops/interface', component:InterfaceComponent},
      { path: 'core-java/oops/absitr', component:AbsitrComponent},
      { path: 'core-java/oops/multipleinhertance', component:MultipleinhertanceComponent},
      { path: 'core-java/oops/polymorphisam', component:PolymorphisamComponent}
    ])
  ]
})
export class OopsModule { }
