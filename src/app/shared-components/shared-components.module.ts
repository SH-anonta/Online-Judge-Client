import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
// import {ProblemSelectorComponent} from '../page-components/contest/shared-components/problem-selector/problem-selector.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SubmissionsTableComponent } from './submissions-table/submissions-table.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ProblemDescriptionComponent } from './problem-description/problem-description.component';
import { ProblemListTableComponent } from './problem-list-table/problem-list-table.component';

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmissionsTableComponent,
    CountDownComponent,
    ProblemDescriptionComponent,
    ProblemListTableComponent,
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
    ProblemDescriptionComponent,
    ProblemListTableComponent,
  ],
})
export class SharedComponentsModule {}
