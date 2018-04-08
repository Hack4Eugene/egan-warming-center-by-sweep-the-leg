import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplyRequestPage } from './supplyRequest';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SupplyRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(SupplyRequestPage),
    TranslateModule.forChild()
  ],
})
export class SupplyRequestPageModule {}
