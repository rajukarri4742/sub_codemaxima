import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachersubmng',
  templateUrl: './teachersubmng.component.html',
  styleUrls: ['./teachersubmng.component.scss']
})
export class TeachersubmngComponent implements OnInit {

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
