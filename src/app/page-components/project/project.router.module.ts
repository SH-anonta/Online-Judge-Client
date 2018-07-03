import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {RouterModule} from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreatorComponent } from './project-creator/project-creator.component';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectMemberListComponent } from './project-member-list/project-member-list.component';

const routers= [
  {
    path: 'projects',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      // order of routes is important
      {
        path: 'create',
        component: ProjectCreatorComponent,
      },
      {
        path: ':project_id/members',
        component: ProjectMemberListComponent,
      },
      {
        path: ':project_id',
        component: ProjectDetailsComponent,
      },
      {
        path: ':project_id/edit',
        component: ProjectEditorComponent,
      },
    ]

  }
];

@NgModule({
  declarations : [
    ProjectComponent,
    ProjectListComponent,
    ProjectCreatorComponent,
    ProjectEditorComponent,
    ProjectDetailsComponent,
    ProjectMemberListComponent
  ],
  imports : [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRouterModule{}
