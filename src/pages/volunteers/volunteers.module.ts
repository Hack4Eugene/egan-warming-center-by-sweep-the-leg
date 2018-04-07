import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteersPage } from './volunteers';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VolunteersPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunteersPage),
    TranslateModule.forChild()
  ],
})
export class VolunteersPageModule {}
