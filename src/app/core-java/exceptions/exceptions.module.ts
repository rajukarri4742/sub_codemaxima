import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionintroComponent } from './exceptionintro/exceptionintro.component';
import { CheckedComponent } from './checked/checked.component';
import { UncheckedComponent } from './unchecked/unchecked.component';
import { TrycatchthrowthrowsComponent } from './trycatchthrowthrows/trycatchthrowthrows.component';
import { UserdefinedComponent } from './userdefined/userdefined.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExceptionintroComponent,
    CheckedComponent,
    UncheckedComponent,
    TrycatchthrowthrowsComponent,
    UserdefinedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'core-java/exceptions/exceptionintro', component:ExceptionintroComponent},
      { path: 'core-java/exceptions/checked', component:CheckedComponent},
      { path: 'core-java/exceptions/unchecked', component:UncheckedComponent},
      { path: 'core-java/exceptions/trycatchthrowthrows', component:TrycatchthrowthrowsComponent},
      { path: 'core-java/exceptions/userdefined', component:UserdefinedComponent}
    ])
  ]
})
export class ExceptionsModule { }
