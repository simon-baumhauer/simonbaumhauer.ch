import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormularComponent } from './contact-formular/contact-formular.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillSheetComponent } from './skill-sheet/skill-sheet.component';
import { SlidehsowComponent } from './slidehsow/slidehsow.component';

const routes: Routes = [
  { path: '', component: SlidehsowComponent},
  { path: 'skills', component: SkillSheetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactFormularComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
