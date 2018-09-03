import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminComponent} from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import {CommonModule} from '@angular/common';
import {IsAdministrator} from '../route-guards/IsAdministrator';
import { ProblemListComponent } from './problem-list/problem-list.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsAdministrator],
    children: [
      {path: '', component: AdminHomeComponent,},
      {path: 'user-list', component: UserListComponent,},
      {path: 'problem-list', component: ProblemListComponent,},
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    UserListComponent,
    ProblemListComponent,
  ],
  providers: [

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedComponentsModule,
  ],

  exports:[
    RouterModule
  ]
})
export class AdminRouterModule {}
