import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, MenuController } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root } from '../';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = "Timeline";
  tab2Title = "Dashboard";
  tab3Title = "Akun Saya";

  constructor(
    public navCtrl: NavController, 
    public translateService: TranslateService,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true,'myMenu');
  }
}
