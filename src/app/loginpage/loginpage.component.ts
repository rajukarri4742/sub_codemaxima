import { Component, OnInit, Output,EventEmitter } from '@angular/core';

export interface LoginUserInfo{
  mobileNumber:string,
  password:string,
  show:boolean,
}

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  @Output() onLoginSubmit: EventEmitter<LoginUserInfo> = new EventEmitter();
  userInfo:LoginUserInfo;
  constructor() { 
      this.userInfo = {
        mobileNumber : "",
        password : "",
        show:false,
      };
  }
  ngOnInit(): void {
  }
  onKeyupMobileNumberInput(event:any):void{
    this.userInfo.mobileNumber=event.target.value;
  }
  onKeyupPasswordInput(event:any):void{
    this.userInfo.password=event.target.value;
  }
  onSubmitLogin():void{
    if(this.userInfo.mobileNumber != "" && this.userInfo.password != ""){
      this.userInfo.show = true;
      this.onLoginSubmit.emit(this.userInfo);
    }
  }
}
