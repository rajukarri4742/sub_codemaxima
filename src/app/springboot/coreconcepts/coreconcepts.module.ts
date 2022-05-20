import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyComponent } from './dependency/dependency.component';
import { ComponentComponent } from './component/component.component';
import { BeansComponent } from './beans/beans.component';
import { IocComponent } from './ioc/ioc.component';
import { AccuatorComponent } from './accuator/accuator.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DependencyComponent,
    ComponentComponent,
    BeansComponent,
    IocComponent,
    AccuatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/coreconcepts/dependency', component: DependencyComponent},
      { path: 'springboot/coreconcepts/component', component: ComponentComponent},
      { path: 'springboot/coreconcepts/beans', component: BeansComponent},
      { path: 'springboot/coreconcepts/ioc', component: IocComponent},
      { path: 'springboot/coreconcepts/accuator', component: AccuatorComponent}
    ])
  ]
})
export class CoreconceptsModule { }
