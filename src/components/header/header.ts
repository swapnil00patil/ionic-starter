import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class Header {

  @Input() title:string;

  constructor(public navCtrl: NavController) {

  }
}
