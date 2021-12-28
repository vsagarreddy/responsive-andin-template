import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Analytics } from './analytics/analytics.component';
import { Competitors } from './competitors/competitors.component';
import { MainHeader } from './main-header/main-header.component';
import { Sidebar } from './sidebar/sidebar.component';
import { TeamProgress } from './team-progress/team-progress.component';

@NgModule({
  declarations: [
    Sidebar,
    MainHeader,
    Analytics,
    Competitors,
    TeamProgress
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule
  ],
  exports: [
    Sidebar,
    MainHeader,
    Analytics,
    Competitors,
    TeamProgress
  ],
  providers: [],
})
export class ComponentsModule { }
