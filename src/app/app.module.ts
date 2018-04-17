import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/dashboard/about/about';
import { ContactPage } from '../pages/dashboard/contact/contact';
import { HomePage } from '../pages/dashboard/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { Header } from '../components/header/header';

import { ApiService } from '../providers/api.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DashboardPage,
    HomePage,
    ListPage,
    LoginPage,
    Header
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ListPage,
    LoginPage,
    DashboardPage,
    Header
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    ApiService,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
