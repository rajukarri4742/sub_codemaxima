import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdesgmng',
  templateUrl: './empdesgmng.component.html',
  styleUrls: ['./empdesgmng.component.scss']
})
export class EmpdesgmngComponent implements OnInit {

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
