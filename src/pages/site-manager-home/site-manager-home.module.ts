import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteManagerHomePage } from './site-manager-home';

@NgModule({
  declarations: [
    SiteManagerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SiteManagerHomePage),
  ],
})
export class SiteManagerHomePageModule {}
