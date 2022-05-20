import { Component } from '@angular/core';
import { TrainingModulesData } from './training-modules-data';

@Component({
  selector: 'app-training-modules',
  templateUrl: './training-modules.component.html',
  styleUrls: ['./training-modules.component.scss']
})
export class TrainingModulesComponent{
  elementId:string;
  trainingModulesData:TrainingModulesData;
  constructor(private data:TrainingModulesData){
    this.elementId = "programming";
    this.trainingModulesData = data;
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
