import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clgbranchmng',
  templateUrl: './clgbranchmng.component.html',
  styleUrls: ['./clgbranchmng.component.scss']
})
export class ClgbranchmngComponent implements OnInit {

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
