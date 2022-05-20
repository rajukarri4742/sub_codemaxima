import { Component,Injector } from '@angular/core';
import { Router ,NavigationStart} from '@angular/router';
import { LoginUserInfo } from './loginpage/loginpage.component';
import { COURSES_MAP } from './course-structure-module/courses.map-data';
import { ICourse } from './course-structure-module/course.interface';
import { CoursesList } from './course-structure-module/courses-list.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
}
