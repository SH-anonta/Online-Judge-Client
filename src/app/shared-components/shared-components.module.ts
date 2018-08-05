import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SubmissionsTableComponent } from './submissions-table/submissions-table.component';
import { CountDownComponent } from './count-down/count-down.component';
import { ProblemDescriptionComponent } from './problem-description/problem-description.component';
import { ProblemListTableComponent } from './problem-list-table/problem-list-table.component';
import {QuillEditorModule} from 'ngx-quill-editor/quillEditor.module';
import {DocumentEditorComponent} from './document-editor/document-editor.component';
import { PageSelectorComponent } from './page-selector/page-selector.component';

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmissionsTableComponent,
    CountDownComponent,
    ProblemDescriptionComponent,
    ProblemListTableComponent,
    DocumentEditorComponent,
    PageSelectorComponent,
    PageSelectorComponent,

  ],
  imports:[
    CommonModule,
    RouterModule,
    QuillEditorModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmissionsTableComponent,
    CountDownComponent,
    ProblemDescriptionComponent,
    ProblemListTableComponent,
    DocumentEditorComponent,
    PageSelectorComponent,
  ],
})
export class SharedComponentsModule {}
