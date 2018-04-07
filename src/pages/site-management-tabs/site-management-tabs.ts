import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SiteManagementTab1Root } from '../pages';
import { SiteManagementTab2Root } from '../pages';
import { SiteManagementTab3Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-site-managemenet-tabs',
  templateUrl: 'site-management-tabs.html'
})
export class SiteManagementTabsPage {
  tab1Root: any = SiteManagementTab1Root;
  tab2Root: any = SiteManagementTab2Root;
  tab3Root: any = SiteManagementTab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });
  }
}
