import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RouterModule} from '@angular/router';


const routers= [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {path: '', redirectTo: '/error-404', pathMatch: 'full'},
      {path: ':user_id', component: UserProfileComponent},
    ]
  }
];

@NgModule({
  declarations : [
    UserComponent,
    UserProfileComponent
  ],
  imports : [
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRouterModule {}
