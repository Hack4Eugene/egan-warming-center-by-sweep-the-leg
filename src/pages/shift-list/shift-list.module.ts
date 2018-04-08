import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ShiftListPage } from './shift-list';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ShiftListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShiftListPage),
    TranslateModule.forChild()
  ],
  exports: [
    ShiftListPage
  ]
})
export class ShiftListPageModule { }
