import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitePage } from './site';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SitePage,
  ],
  imports: [
    IonicPageModule.forChild(SitePage),
    TranslateModule.forChild()
  ],
})
export class SitePageModule {}
