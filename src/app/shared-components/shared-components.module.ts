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
import {FormsModule} from '@angular/forms';
import { ErrorMessageListComponent } from './error-message-list/error-message-list.component';
import {NumberToAlphabet} from '../pipes/number-to-alphabet';
import {ContestListTableComponent} from './contest-list-table/contest-list-table.component';

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
    ErrorMessageListComponent,
    ContestListTableComponent,
  ],
  imports:[
    CommonModule,
    RouterModule,
    QuillEditorModule,
    FormsModule,
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
    ErrorMessageListComponent,
    ContestListTableComponent
  ],
})
export class SharedComponentsModule {}
