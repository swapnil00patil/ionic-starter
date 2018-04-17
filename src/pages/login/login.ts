import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { ApiService } from '../../providers/api.service';

import { DashboardPage } from '../dashboard/dashboard';

import { API_URLS } from '../../constants/api-constants'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  user = {}
  constructor(private app: App, private api: ApiService) {

  }

  loginSubmit() {
    this.api.get(API_URLS.LOGIN)
    .subscribe(
        data => { 
          console.log(data)
          this.app.getActiveNav().push(DashboardPage);
        },
        err => console.error(err)
      );
  }
}
