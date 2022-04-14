import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidehsowComponent } from './slidehsow/slidehsow.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { SkillSheetComponent } from './skill-sheet/skill-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidehsowComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    SkillSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
