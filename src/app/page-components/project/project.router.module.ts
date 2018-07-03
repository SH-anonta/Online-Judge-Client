import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {RouterModule} from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreatorComponent } from './project-creator/project-creator.component';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routers= [
  {
    path: 'projects',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      // this route must be above the other routes two
      {
        path: 'create',
        component: ProjectCreatorComponent,
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
    ProjectDetailsComponent
  ],
  imports : [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRouterModule{}
