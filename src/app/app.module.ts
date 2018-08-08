import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RootRouterModule} from './root-router.module';
import {UserService} from './global-services/user.service';
import {AuthService} from './global-services/auth.service';
import {DataFetcherService} from './global-services/data-fetcher.service';
import {LinkGeneratorService} from './global-services/link-generator.service';
import {SharedComponentsModule} from './shared-components/shared-components.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AnnouncementRepositoryService} from './global-services/repository-services/announcement-repository.service';
import {ProblemRepositoryService} from './global-services/repository-services/problem-repository-service';
import {SubmissionRepositoryService} from './global-services/repository-services/submissions-repository.service';
import {UserRepositoryService} from './global-services/repository-services/user-repository.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootRouterModule,
    SharedComponentsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    UserService,
    DataFetcherService,
    LinkGeneratorService,

    // repository providers
    AnnouncementRepositoryService,
    ProblemRepositoryService,
    SubmissionRepositoryService,
    UserRepositoryService,

    // Needed for integrating with ASP backend
    {provide: APP_BASE_HREF, useValue: '/'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

