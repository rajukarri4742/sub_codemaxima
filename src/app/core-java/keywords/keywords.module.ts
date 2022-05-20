import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static/static.component';
import { ThisComponent } from './this/this.component';
import { FinalComponent } from './final/final.component';
import { SuperComponent } from './super/super.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StaticComponent,
    ThisComponent,
    FinalComponent,
    SuperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
      {path : "core-java/keywords/static", component:StaticComponent},
      {path : "core-java/keywords/final", component:FinalComponent},
      {path : "core-java/keywords/this", component:ThisComponent},
      {path : "core-java/keywords/super", component:SuperComponent}
      
    ])
  ]
})
export class KeywordsModule { }
