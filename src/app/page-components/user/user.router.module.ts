import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RouterModule} from '@angular/router';
import { UserProfileEditorComponent } from './user-profile-editor/user-profile-editor.component';
import { UserTaskListComponent } from './user-task-list/user-task-list.component';


const routers= [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: ':user_id',
        component: UserProfileComponent,
      },
      {
        path: ':user_id/tasks',
        component: UserTaskListComponent,
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
    UserTaskListComponent,
  ],
  imports : [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRouterModule {}
