import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptflatmng',
  templateUrl: './aptflatmng.component.html',
  styleUrls: ['./aptflatmng.component.scss']
})
export class AptflatmngComponent implements OnInit {

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
