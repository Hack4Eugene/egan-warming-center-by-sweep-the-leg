import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesPage } from './supplies';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SuppliesPage,
  ],
  imports: [
    IonicPageModule.forChild(SuppliesPage),
    TranslateModule.forChild()
  ],
})
export class SuppliesPageModule {}
