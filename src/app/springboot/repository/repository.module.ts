import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryintroComponent } from './repositoryintro/repositoryintro.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RepositoryintroComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/repository/repositoryintro', component: RepositoryintroComponent},
      { path: 'springboot/repository/example1', component: Example1Component},
      { path: 'springboot/repository/example2', component: Example2Component},
      { path: 'springboot/repository/example3', component: Example3Component},
      { path: 'springboot/repository/example4', component: Example4Component}
    ])
  ]
})
export class RepositoryModule { }
