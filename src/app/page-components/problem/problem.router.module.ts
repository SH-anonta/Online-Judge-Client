import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProblemComponent} from './problem.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDetailsComponent } from './problem-details/problem-details.component';
import { ProblemCreatorComponent } from './problem-creator/problem-creator.component';
import { ProblemEditorComponent } from './problem-editor/problem-editor.component';
import {SharedComponentsModule} from '../../shared-components/shared-components.module';
import { ProblemSubmitComponent } from './problem-submit/problem-submit.component';
import {FormsModule} from '@angular/forms';
import { ProblemSubmissionsComponent } from './problem-submissions/problem-submissions.component';


const routes= [
  {
    path: 'problems',
    component: ProblemComponent,
    children: [
      {path: '', component: ProblemListComponent,},
      {path: 'create', component: ProblemCreatorComponent,},
      {path: ':problem_id', component: ProblemDetailsComponent,},
      {path: ':problem_id/edit', component: ProblemEditorComponent,},
      {path: ':problem_id/submit', component: ProblemSubmitComponent,},
      {path: ':problem_id/submissions', component: ProblemSubmissionsComponent,},
    ],
  },
];

@NgModule({
  declarations: [
    ProblemComponent,
    ProblemListComponent,
    ProblemDetailsComponent,
    ProblemCreatorComponent,
    ProblemEditorComponent,
    ProblemSubmitComponent,
    ProblemSubmissionsComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedComponentsModule,
    FormsModule,
  ],

  exports:[
    RouterModule
  ]
})
export class ProblemRouterModule {}
