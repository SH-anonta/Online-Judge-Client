import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomepageComponent} from './page-components/homepage/homepage.component';
import {Error404Component} from './page-components/error404/error404.component';
import {LoginComponent} from './page-components/login/login.component';
import {RegisterComponent} from './page-components/register/register.component';
import {AboutComponent} from './page-components/about/about.component';
import {UserComponent} from './page-components/user/user.component';
import {UserRouterModule} from './page-components/user/user.router.module';
import {AdminRouterModule} from './admin/admin.router.module';
import {DevsOnlyPageComponent} from './page-components/devs-only-page/devs-only-page.component';
import {CommonModule} from '@angular/common';
import {ProblemRouterModule} from './page-components/problem/problem.router.module';
import {ContestRouterModule} from './page-components/contest/contest.router.module';
import {AnnouncementsRouterModule} from './page-components/announcements/announcements.router.module';
import {NgAutoCompleteModule} from 'ng-auto-complete';
import {IsAuthenticated} from './route-guards/IsAuthenticated';
import {IsNotAuthenticated} from './route-guards/IsNotAuthenticated';
import {IsAdministrator} from './route-guards/IsAdministrator';
import {SharedComponentsModule} from './shared-components/shared-components.module';

const routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotAuthenticated],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IsNotAuthenticated],
  },

  {path: 'about', component: AboutComponent},

  {path: 'user', component: UserComponent},

  {
    path: 'devs-only',
    component: DevsOnlyPageComponent,
  },

  {
    path: 'error-404',
    component: Error404Component,
    data : {error_msg : 'error message not provided'}
  },

  {path: '**', redirectTo: 'error-404'},
];

@NgModule({
  declarations: [
    HomepageComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    AboutComponent,

    DevsOnlyPageComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    UserRouterModule,
    AdminRouterModule,
    ProblemRouterModule,
    ContestRouterModule,
    AnnouncementsRouterModule,
    SharedComponentsModule,

    FormsModule,
    CommonModule,
  ],
  exports: [
    RouterModule,
  ],
  providers:[

  ]
})
export class RootRouterModule {}
