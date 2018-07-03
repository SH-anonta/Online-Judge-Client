import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DiscussionBoardComponent} from './discussion-board.component';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionCreatorComponent } from './discussion-creator/discussion-creator.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';
import { DiscussionEditorComponent } from './discussion-editor/discussion-editor.component';
import { DiscussionReplyEditorComponent } from './discussion-reply-editor/discussion-reply-editor.component';


const routers= [
  {
    path: 'projects/:project_id/tasks/:task_id/discussions',
    component: DiscussionBoardComponent,
    children: [
      {
        path: '',
        component: DiscussionListComponent,
      },
      // order of routes is important
      {
        path: 'create',
        component: DiscussionCreatorComponent,
      },
      {
        path: ':discussion_id',
        component: DiscussionDetailsComponent,
      },
      {
        path: ':discussion_id/edit',
        component: DiscussionEditorComponent,
      },
      {
        path: ':discussion_id/replies/:reply_id/edit',
        component: DiscussionReplyEditorComponent,
      },
    ]

  }
];

@NgModule({
  declarations : [
    DiscussionBoardComponent,
    DiscussionListComponent,
    DiscussionCreatorComponent,
    DiscussionDetailsComponent,
    DiscussionEditorComponent,
    DiscussionReplyEditorComponent
  ],
  imports : [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class DiscussionBoardRouterModule{}
