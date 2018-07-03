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
import {ProjectRouterModule} from './page-components/project/project.router.module';



const routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dfa', component: DfaCreatorComponent},
  {path: 'about', component: AboutComponent},

  {path: 'user', component: UserComponent},

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
  ],
  imports: [
    RouterModule.forRoot(routes),
    UserRouterModule,
    AdminRouterModule,
    ProjectRouterModule,

    FormsModule,
    AutomataCreatorModule,
  ],
  exports: [
    RouterModule
  ]
})
export class RootRouterModule {}
