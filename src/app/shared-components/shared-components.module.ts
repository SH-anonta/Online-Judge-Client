import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProblemSelectorComponent} from './problem-selector/problem-selector.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProblemSelectorComponent
  ],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProblemSelectorComponent,
  ],
})
export class SharedComponentsModule {}
