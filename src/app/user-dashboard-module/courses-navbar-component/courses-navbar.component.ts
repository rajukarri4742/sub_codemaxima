import {
  Component, Input, Output,EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { LoginUserInfo } from 'src/app/loginpage/loginpage.component';
import { UserCoursesMapping } from '../user-courses-mapping';
@Component({
  selector: 'app-courses-navbar',
  templateUrl: './courses-navbar.component.html',
  styleUrls: ['./courses-navbar.component.scss'],
})
export class CoursesNavbarComponent implements OnChanges {
  @Input() showMiniSideBarIcon:boolean = false;
  @Input() coursesList:any[] = [];
  @Input() showCoursesNavBar:boolean = false;
  @Input() userInfo:LoginUserInfo;
  @Output() toggleSideBarEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() loadChaptersEvent: EventEmitter<string> = new EventEmitter();
  @Output() loggedInEvent: EventEmitter<any> = new EventEmitter();
  userCoursesMapping:UserCoursesMapping;
  sideBarToggle:boolean = false;
  selectedCourse:string = '';
  constructor(private data:UserCoursesMapping){
    this.userInfo = {
      mobileNumber : "",
      password : "",
      show:false,
    };
    this.userCoursesMapping = data;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.userInfo.mobileNumber != "" && this.userInfo.password != "" && this.userInfo.show){
      this.coursesList = this.userCoursesMapping.userMap[this.userInfo.password];
    }
    this.loggedInEvent.emit(this.coursesList);
    console.log(this.userInfo);
    console.log(this.coursesList);
  }
  onToggleSideBar(){
    this.sideBarToggle = !this.sideBarToggle;
    this.toggleSideBarEvent.emit(this.sideBarToggle);
  }
  loadChapters(selectedCourse: any){
    this.selectedCourse = selectedCourse;
    this.loadChaptersEvent.emit(this.selectedCourse);
  }
  onUserDashBoardLinkActivate(){
    this.selectedCourse = "";
  }
}
