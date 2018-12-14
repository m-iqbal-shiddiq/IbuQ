import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform, AlertController } from 'ionic-angular';

import { Settings } from '../providers';
import { WelcomePage } from '../pages/welcome/welcome';
import { BacaantersimpanPage } from '../pages/bacaantersimpan/bacaantersimpan';
import { TulisanbaruPage } from '../pages/tulisanbaru/tulisanbaru';
import { DraftPage } from '../pages/draft/draft';
import { StattulisanPage } from '../pages/stattulisan/stattulisan';
import { MainPage } from '../pages';
import { DISABLED } from '@angular/forms/src/model';


@Component({
  template: `<ion-menu id="myMenu"[content]="content">
    <ion-header>
      <ion-navbar color="basic">
        <ion-title align="center">IbuQ</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content class="ion-col">
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="ion-col">
          {{p.title}}
        </button>
      </ion-list>

      <ion-list align="center">
       <ion-icon name="ios-power-icon"></ion-icon>
       <button ion-button color="basic" (click)="konfirmasi()">Logout</button>
      </ion-list>
    </ion-content>

   

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage = WelcomePage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Home', component: MainPage},
    { title: 'Bacaan Tersimpan', component: BacaantersimpanPage },
    { title: 'Tulisan Baru', component: TulisanbaruPage },
    { title: 'Draft', component: DraftPage },
    { title: 'Stat Tulisan', component: StattulisanPage }
  ]

  constructor(
    platform: Platform, 
    settings: Settings,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  konfirmasi() {
    const confirm = this.alertCtrl.create({
      title: 'Keluar',
      message: 'Anda yakin ingin keluar?',
      buttons: [
        {
          text: 'Yakin',
          handler: () => {
            console.log('Disagree clicked');
            this.nav.push(WelcomePage);
          }
        },
        {
          text: 'Tidak',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
