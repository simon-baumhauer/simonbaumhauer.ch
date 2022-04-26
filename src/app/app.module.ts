import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidehsowComponent } from './slidehsow/slidehsow.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { SkillSheetComponent } from './skill-sheet/skill-sheet.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormularComponent } from './contact-formular/contact-formular.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    SlidehsowComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    SkillSheetComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactFormularComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
