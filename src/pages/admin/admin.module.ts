import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPage } from './admin';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdminPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminPage),
    TranslateModule.forChild()
  ],
})
export class AdminPageModule {}
