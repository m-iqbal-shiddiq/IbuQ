import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bacaantersimpan',
  templateUrl: 'bacaantersimpan.html',
})
export class BacaantersimpanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacaantersimpanPage');
  }

}
