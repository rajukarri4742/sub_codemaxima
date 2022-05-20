import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiComponent } from './initi/initi.component';
import { StartComponent } from './start/start.component';
import { PropertiesComponent } from './properties/properties.component';
import { EntityComponent } from './entity/entity.component';
import { PostmanComponent } from './postman/postman.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InitiComponent,
    StartComponent,
    PropertiesComponent,
    EntityComponent,
    PostmanComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'springboot/boot/start', component: StartComponent},
      { path: 'springboot/boot/initi', component: InitiComponent},
      { path: 'springboot/boot/properties', component: PropertiesComponent},
      { path: 'springboot/boot/postman', component: PostmanComponent},
      { path: 'springboot/boot/entity', component: EntityComponent}
    ])
  ]
})
export class BootModule { }
