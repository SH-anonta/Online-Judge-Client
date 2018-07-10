import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
// import {ProblemSelectorComponent} from '../page-components/contest/shared-components/problem-selector/problem-selector.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SubmissionsTableComponent } from './submissions-table/submissions-table.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmissionsTableComponent,
    CountDownComponent,
  ],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmissionsTableComponent,
    CountDownComponent,
  ],
})
export class SharedComponentsModule {}
