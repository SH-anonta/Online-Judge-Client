import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RouterModule} from '@angular/router';
import { UserProfileEditorComponent } from './user-profile-editor/user-profile-editor.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';
import {SharedComponentsModule} from '../../shared-components/shared-components.module';
import { UserContestHistoryComponent } from './user-contest-history/user-contest-history.component';
import { UserProblemsComponent } from './user-problems/user-problems.component';


const routes= [
  {
    path: 'users',
    component: UserComponent,
    children: [
      {
        path: ':user_id',
        component: UserProfileComponent,
      },
      {
        path: ':user_id/problems',
        component: UserProblemsComponent,
      },
      {
        path: ':user_id/submissions',
        component: UserSubmissionsComponent,
      },
      {
        path: ':user_id/contest-history',
        component: UserContestHistoryComponent,
      },
      {
        path: ':user_id/edit',
        component : UserProfileEditorComponent
      },
      {
        path: '',
        redirectTo: '/error-404',
        pathMatch: 'full'
      },
    ]

  }
];

@NgModule({
  declarations : [
    UserComponent,
    UserProfileComponent,
    UserProfileEditorComponent,
    UserSubmissionsComponent,
    UserContestHistoryComponent,
    UserProblemsComponent,
  ],
  imports : [
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class UserRouterModule {}
