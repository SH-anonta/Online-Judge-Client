import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminComponent} from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProjectListComponent } from './project-list/project-list.component';


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '', component: AdminHomeComponent,},
      {path: 'user-list', component: UserListComponent,},
      {path: 'project-list', component: ProjectListComponent,},
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    UserListComponent,
    ProjectListComponent,
  ],

  imports: [
    RouterModule.forChild(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AdminRouterModule {}
