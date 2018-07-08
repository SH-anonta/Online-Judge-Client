import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContestComponent} from './contest.component';
import { ContestListComponent } from './contest-list/contest-list.component';
import { ContestCreatorComponent } from './contest-creator/contest-creator.component';
import { ContestEditorComponent } from './contest-editor/contest-editor.component';
import { ContestDetailsComponent } from './contest-details/contest-details.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ContestProblemListComponent } from './contest-problem-list/contest-problem-list.component';
import { ContestRankListComponent } from './contest-rank-list/contest-rank-list.component';
import { ContestRegistrationComponent } from './contest-registration/contest-registration.component';
import { ContestProblemSelectorComponent } from './shared-components/contest-problem-selector/contest-problem-selector.component';
import { ContestProblemComponent } from './contest-problem/contest-problem.component';
import { ContestSubmitComponent } from './contest-submit/contest-submit.component';
import {SharedComponentsModule} from '../../shared-components/shared-components.module';


const routers= [
  {
    path: 'contest',
    component: ContestComponent,
    children: [
      {
        path: '',
        component: ContestListComponent,
      },
      {
        path: 'create',
        component: ContestCreatorComponent,
      },
      {
        path: ':contest_id',
        component: ContestDetailsComponent,
      },
      {
        path: ':contest_id/register',
        component: ContestRegistrationComponent,
      },
      {
        path: ':contest_id/edit',
        component: ContestEditorComponent,
      },
      {
        path: ':contest_id/problems',
        component: ContestProblemListComponent,
      },
      {
        path: ':contest_id/problems/:problem_id',
        component: ContestProblemComponent,
      },
      {
        path: ':contest_id/problems/:problem_id/submit',
        component: ContestSubmitComponent,
      },
      {
        path: ':contest_id/rank',
        component: ContestRankListComponent,
      },

    ]
  }
];

@NgModule({
  declarations : [
    ContestComponent,
    ContestListComponent,
    ContestCreatorComponent,
    ContestEditorComponent,
    ContestDetailsComponent,
    ContestProblemListComponent,
    ContestRankListComponent,
    ContestRegistrationComponent,
    ContestProblemSelectorComponent,
    ContestProblemComponent,
    ContestSubmitComponent,
  ],
  imports : [
    RouterModule.forChild(routers),
    FormsModule,
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class ContestRouterModule {}
