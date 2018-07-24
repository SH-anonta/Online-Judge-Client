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

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SubmissionsTableComponent,
    CountDownComponent,
    ProblemDescriptionComponent,
    ProblemListTableComponent,
    DocumentEditorComponent
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
    DocumentEditorComponent
  ],
})
export class SharedComponentsModule {}
