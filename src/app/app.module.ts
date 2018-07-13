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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RootRouterModule,
    SharedComponentsModule
  ],
  providers: [
    AuthService,
    UserService,
    DataFetcherService,
    LinkGeneratorService,

    // Needed for integrating with ASP backend
    {provide: APP_BASE_HREF, useValue: '/'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

