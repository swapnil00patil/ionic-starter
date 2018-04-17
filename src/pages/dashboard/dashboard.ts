import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { ContactPage } from './contact/contact';
import { AboutPage } from './about/about';
import { HomePage } from './home/home';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
