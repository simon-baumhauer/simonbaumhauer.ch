import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlidehsowComponent } from './slidehsow/slidehsow.component';

const routes: Routes = [
  { path: '', component: SlidehsowComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      // Restore the last scroll position
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: "enabled",
    })
  ],
})
export class AppRoutingModule { }
