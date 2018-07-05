import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminComponent} from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import {CommonModule} from '@angular/common';


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
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

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],

  exports:[
    RouterModule
  ]
})
export class AdminRouterModule {}
