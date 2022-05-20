import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CoreJavaModule } from './core-java/core-java.module';
import { MySqlModule } from './my-sql/my-sql.module';
import { SharedModule } from './shared/shared.module';
import { HibernateModule } from './hibernate/hibernate.module';
import { DefaultdataComponent } from './defaultdata/defaultdata.component';
import { LowlLevelDesignModule } from './lowl-level-design/lowl-level-design.module';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SpringbootModule } from './springboot/springboot.module';
import { IconButtonComponent } from './icon-button/icon.button.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LandingPageComponent } from './landing-page/home/landing-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { UserDashBoardModule } from './user-dashboard-module/user-dashboard.module';
import { WebdesignModule } from './webdesign/webdesign.module';
import { MainComComponent } from './main-com/main-com.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    NavMenuComponent,
    DefaultdataComponent,
    FooterComponent,
    IconButtonComponent,
    ScrollToTopComponent,
    LoginpageComponent,
    MainComComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CoreJavaModule,
    LowlLevelDesignModule,
    SpringbootModule,
    SharedModule,
    MySqlModule,
    HibernateModule,
    LandingPageModule,
    UserDashBoardModule,
    WebdesignModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent, pathMatch: 'full' },
      { path: 'default-data', component:DefaultdataComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'loginpage', component: LoginpageComponent}
      
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
