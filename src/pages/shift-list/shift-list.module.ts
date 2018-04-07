import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ShiftListPage } from './shift-list';

@NgModule({
  declarations: [
    ShiftListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShiftListPage)
  ],
  exports: [
    ShiftListPage
  ]
})
export class ShiftListPageModule { }
