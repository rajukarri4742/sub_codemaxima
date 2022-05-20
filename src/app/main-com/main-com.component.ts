import { Component,Injector } from '@angular/core';
import { Router ,NavigationStart} from '@angular/router';
import { LoginUserInfo } from '../loginpage/loginpage.component';
import { COURSES_MAP } from '../course-structure-module/courses.map-data';
import { ICourse } from '../course-structure-module/course.interface';
import { CoursesList } from '../course-structure-module/courses-list.enum';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.scss']
})
export class MainComComponent {
  coursesList:string[] = Object.values(CoursesList);
  chapters: any[] = [];
  lessons: any[] = [];

  showBody:boolean=true;
  homepageShow:boolean=false;
  loginpageShow:boolean=false;
  userDashBoardShow:boolean=false;
  toggleSideBar:boolean = false;
  isUserDashboard:boolean = false;

  selectedCourse:string = "";
  selectedChapter: string = "";
  selectedLesson: string = "";
  
  loginUserInfo:LoginUserInfo;
  service: ICourse|null = null;

  constructor(private injector: Injector,
    private router: Router  ) {
      this.loginUserInfo = {
        mobileNumber : "",
        password : "",
        show:false,
      };
  }
  
  
  ngOnInit() {
    this.showBody = true;
    this.loadChapters(this.coursesList[0]);
    
  }

  public loadChapters(course: string) {
    this.showBody=true;
    this.selectedCourse = course;
    let injectable  = COURSES_MAP[course];
    this.service = this.injector.get(injectable);
    this.chapters = this.service?.loadChapters();
    this.loadLessonNames(this.chapters[0]);
  }

  public loadLessonNames(chapter: any) {
    this.selectedChapter = chapter.name;
    this.lessons = chapter.lessons;
    if (this.lessons.length > 0) {
      this.loadLesson(this.lessons[0])
    } else {
      this.router.navigate(['/default-data']);
    }
  }

  public loadLesson(lesson: any) {
    this.selectedLesson = lesson.name;
    if(lesson.url == null || lesson.url == undefined || lesson.url == ""){
      this.router.navigate(['/default-data']);
    }else{
      this.router.navigate([lesson.url]);
    }
  }

  onToggleSideBar(){
    this.toggleSideBar = !this.toggleSideBar;
  }
  onLoginSubmit(userInfo:LoginUserInfo){
    this.loginpageShow     = false;
    this.showBody          = false;
    this.userDashBoardShow = true;
    this.homepageShow      = true;
    this.loginUserInfo = userInfo;
  }
  getRegisteredCourses(registeredCourses:any){
    this.coursesList = registeredCourses;
  }
}
