import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SiteManagementTabsPage } from './site-management-tabs';

@NgModule({
  declarations: [
    SiteManagementTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteManagementTabsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SiteManagementTabsPage
  ]
})
export class SiteManagementTabsPageModule { }
