import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashmapModule } from './hashmap/hashmap.module';
import { KeywordsModule } from './keywords/keywords.module';
import { WrapperModule } from './wrapper/wrapper.module';
import { ArraysModule } from './arrays/arrays.modules';
import { PattrenModule } from './pattren/pattren.modules';
import { Basic_programModule } from './basic_program/basic_program.module';
import { StringModule } from './strings/strings.module';
import { SharedModule } from '../shared/shared.module';
import { MethodsModules } from './methods/methods.modules';
import { ObjectclassModule } from './objectclass/objectclass.module';
import { PojoclassesModule } from './pojoclasses/pojoclasses.module';
import { ClassesrelationsModule } from './classesrelations/classesrelations.module';
import { ManagementsystemsModule } from './managementsystems/managementsystems.module';
import { OopsModule } from './oops/oops.module';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { IntroModule } from './intro/intro.module';
import { CollectionsModule } from './collections/collections.module';
import { MultiModule } from './multi/multi.module';




@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    IntroModule,
    StringModule,
    CommonModule,
    ArraysModule,
    PattrenModule,
    Basic_programModule,
    CollectionsModule,
    HashmapModule,
    KeywordsModule,
    WrapperModule,
    MethodsModules,
    ObjectclassModule,
    PojoclassesModule,
    ClassesrelationsModule,
    ManagementsystemsModule,
    OopsModule,
    ExceptionsModule,
    MultiModule
  ]
})
export class CoreJavaModule { }
