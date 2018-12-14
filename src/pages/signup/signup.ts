import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: { name: string, username: string, email: string, password: string, umur: string } = {
    name: 'Nur Rahmawati',
    username: 'Nuremaknyeroni',
    email: 'Nur.Rahmawati666@gmail.com',
    password: '123456',
    umur: '3'
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
  }

  doSignup() {
    this.navCtrl.push(MainPage);
  }
}
