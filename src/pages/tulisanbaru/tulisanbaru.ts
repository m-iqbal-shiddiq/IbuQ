import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tulisanbaru',
  templateUrl: 'tulisanbaru.html',
})
export class TulisanbaruPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TulisanbaruPage');
  }

}
