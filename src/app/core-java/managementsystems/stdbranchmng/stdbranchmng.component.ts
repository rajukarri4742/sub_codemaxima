import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stdbranchmng',
  templateUrl: './stdbranchmng.component.html',
  styleUrls: ['./stdbranchmng.component.scss']
})
export class StdbranchmngComponent implements OnInit {

  elementId:string;
  constructor() { 
    this.elementId = "pojo";
  }
  ngOnInit(): void {
  }
  tabChange(event:Event){
    this.elementId = (event.target as Element).id;
  }

}
