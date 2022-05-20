import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  elementId:string;
  constructor() { 
    this.elementId = "for-loop";
  }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }
}
