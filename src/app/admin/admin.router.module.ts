import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminComponent} from './admin.component';


const routes= [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      }
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
  ],

  imports: [
    RouterModule.forChild(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AdminRouterModule {}
