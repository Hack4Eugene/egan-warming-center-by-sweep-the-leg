import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitePage } from './site';

@NgModule({
  declarations: [
    SitePage,
  ],
  imports: [
    IonicPageModule.forChild(SitePage),
  ],
})
export class SitePageModule {}
