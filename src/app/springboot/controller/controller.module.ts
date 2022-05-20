import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlerintroComponent } from './controlerintro/controlerintro.component';
import { AnnotationsComponent } from './annotations/annotations.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ControlerintroComponent,
    AnnotationsComponent,
    Example1Component,
    Example2Component,
    Example3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/controller/repositoryintro', component: ControlerintroComponent},
      { path: 'springboot/controller/annotations', component: AnnotationsComponent},
      { path: 'springboot/controller/example1', component: Example1Component},
      { path: 'springboot/controller/example2', component: Example2Component},
      { path: 'springboot/controller/example3', component: Example3Component}
    ])
  ]
})
export class ControllerModule { }
