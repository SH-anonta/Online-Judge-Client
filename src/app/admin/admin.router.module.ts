import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminComponent} from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import {CommonModule} from '@angular/common';
import {IsAdministrator} from '../route-guards/IsAdministrator';


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsAdministrator],
    children: [
      {path: '', component: AdminHomeComponent,},
      {path: 'user-list', component: UserListComponent,},
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    UserListComponent,
  ],
  providers: [

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],

  exports:[
    RouterModule
  ]
})
export class AdminRouterModule {}
