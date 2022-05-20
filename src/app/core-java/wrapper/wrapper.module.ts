import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntegerComponent } from './integer/integer.component';
import { DoubleComponent } from './double/double.component';
import { CharacterComponent } from './character/character.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IntroductionComponent,
    IntegerComponent,
    DoubleComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:"core-java/wrapper/introduction", component:IntroductionComponent},
      {path:"core-java/wrapper/integer", component:IntegerComponent},
      {path:"core-java/wrapper/double", component:DoubleComponent},
      {path:"core-java/wrapper/character", component:CharacterComponent}
    ])
  ]
})
export class WrapperModule { }
