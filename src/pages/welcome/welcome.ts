import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController  
  ) { 
    this.menuCtrl.enable(false,'myMenu');
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}
