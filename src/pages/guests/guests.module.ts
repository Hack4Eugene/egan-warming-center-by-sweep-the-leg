import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestsPage } from './guests';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GuestsPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestsPage),
    TranslateModule.forChild()
  ],
})
export class GuestsPageModule {}
