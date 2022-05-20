import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCmpComponent } from './video-cmp/video-cmp.component';
import { CompilerCmpComponent } from './compiler-cmp/compiler-cmp.component';
import { CodeEditorModule } from '@ngstack/code-editor';



@NgModule({
  declarations: [
    VideoCmpComponent,
    CompilerCmpComponent
  ],
  imports: [
    CommonModule,
    CodeEditorModule.forRoot(),
  ],
  exports: [
    VideoCmpComponent,
    CompilerCmpComponent
  ]
})
export class SharedModule { }
