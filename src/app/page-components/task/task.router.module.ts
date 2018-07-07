import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {RouterModule} from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MemberSelectorComponent } from './shared-components/member-selector/member-selector.component';
import { CheckListSelectorComponent } from './shared-components/check-list-selector/check-list-selector.component';


const routers= [
  {
    path: 'projects/:project_id/tasks',
    component: TaskComponent,
    children: [
      {
        path: '',
        component: TaskListComponent,
      },
      // order of routes is important
      {
        path: 'create',
        component: TaskCreatorComponent,
      },
      {
        path: ':task_id',
        component: TaskDetailsComponent,
      },
      {
        path: ':task_id/edit',
        component: TaskEditorComponent,
      },
    ]

  }
];

@NgModule({
  declarations : [
    TaskComponent,
    TaskDetailsComponent,
    TaskListComponent,
    TaskCreatorComponent,
    TaskEditorComponent,
    MemberSelectorComponent,
    CheckListSelectorComponent
  ],
  imports : [
    RouterModule.forChild(routers),
    FormsModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRouterModule{}
