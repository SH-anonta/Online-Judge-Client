import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomepageComponent} from './page-components/homepage/homepage.component';
import {Error404Component} from './page-components/error404/error404.component';
import {LoginComponent} from './page-components/login/login.component';
import {RegisterComponent} from './page-components/register/register.component';
import {DfaCreatorComponent} from './feature-modules/automata-creator/dfa-creator/dfa-creator.component';
import {AutomataCreatorModule} from './feature-modules/automata-creator/automata-creator.module';
import {AboutComponent} from './page-components/about/about.component';
import {UserComponent} from './page-components/user/user.component';
import {UserRouterModule} from './page-components/user/user.router.module';
import {AdminRouterModule} from './admin/admin.router.module';
import {DevsOnlyPageComponent} from './page-components/devs-only-page/devs-only-page.component';
import {CommonModule} from '@angular/common';
import {ProblemRouterModule} from './page-components/problem/problem.router.module';
import {ContestRouterModule} from './page-components/contest/contest.router.module';



const routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dfa', component: DfaCreatorComponent},
  {path: 'about', component: AboutComponent},

  {path: 'user', component: UserComponent},

  {path: 'devs-only', component: DevsOnlyPageComponent},

  {path: 'error-404', component: Error404Component},
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

    FormsModule,
    AutomataCreatorModule,
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class RootRouterModule {}
