import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteManagerHomePage } from './site-manager-home';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SiteManagerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SiteManagerHomePage),
    TranslateModule.forChild()
  ],
})
export class SiteManagerHomePageModule {}
