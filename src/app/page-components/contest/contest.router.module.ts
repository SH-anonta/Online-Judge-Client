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
import { RegisterComponent } from './register/register.component';


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
        component: RegisterComponent,
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
    RegisterComponent,
  ],
  imports : [
    RouterModule.forChild(routers),
    FormsModule,
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class ContestRouterModule {}
