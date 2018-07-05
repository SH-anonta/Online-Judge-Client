import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {RouterModule} from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import {FormsModule} from '@angular/forms';


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
    TaskEditorComponent
  ],
  imports : [
    RouterModule.forChild(routers),
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRouterModule{}
