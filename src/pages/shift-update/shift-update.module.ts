import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ShiftUpdatePage } from './shift-update';

@NgModule({
  declarations: [
    ShiftUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ShiftUpdatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ShiftUpdatePage
  ]
})
export class ShiftUpdatePageModule { }
