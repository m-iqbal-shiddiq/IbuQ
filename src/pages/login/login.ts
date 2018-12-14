import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { username: string, password: string } = {
    username: 'Nuremaknyeroni',
    password: 'test123'
  };

  constructor(
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService
  ) {
  }

  doLogin() {
    this.navCtrl.push(MainPage);
  }

  kembali(){
    this.navCtrl.push(WelcomePage);
  }
}
