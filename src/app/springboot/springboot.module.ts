import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroModule } from './intro/intro.module';
import { BootModule } from './boot/boot.module';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';
import { RepositoryModule } from './repository/repository.module';
import { CoreconceptsModule } from './coreconcepts/coreconcepts.module';
import { SpringaopModule } from './springaop/springaop.module';
import { SwaggerModule } from './swagger/swagger.module';
import { SpringsequrityModule } from './springsequrity/springsequrity.module';
import { Project1Module } from './project1/project1.module';
import { Project2Module } from './project2/project2.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroModule,
    BootModule,
    ControllerModule,
    ServiceModule,
    RepositoryModule,
    CoreconceptsModule,
    SpringaopModule,
    SwaggerModule,
    SpringsequrityModule,
    Project1Module,
    Project2Module
    
  ]
})
export class SpringbootModule { }
