import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DiscussionBoardComponent} from './discussion-board.component';
import { DiscussionListComponent } from './discussion-list/discussion-list.component';
import { DiscussionCreatorComponent } from './discussion-creator/discussion-creator.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';
import { DiscussionEditorComponent } from './discussion-editor/discussion-editor.component';


const routers= [
  {
    path: 'projects/:project_id/tasks',
    component: DiscussionBoardComponent,
    //todo add routes to sub components
    children: [
      {
        path: '',
        component: DiscussionListComponent,
      },
      // order of routes is important

    ]

  }
];

@NgModule({
  declarations : [
    DiscussionBoardComponent,
    DiscussionListComponent,
    DiscussionCreatorComponent,
    DiscussionDetailsComponent,
    DiscussionEditorComponent
  ],
  imports : [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRouterModule{}
