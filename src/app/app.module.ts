import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RootRouterModule} from './root-router.module';
import {HeaderComponent} from './shared-components/header/header.component';
import {FooterComponent} from './shared-components/footer/footer.component';
import {UserService} from './global-services/user.service';
import {AuthService} from './global-services/auth.service';
import {DataFetcherService} from './global-services/data-fetcher.service';
import {SidebarComponent} from './shared-components/sidebar/sidebar.component';
import {LingGeneratorService} from './global-services/ling-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    RootRouterModule,
  ],
  providers: [
    AuthService,
    UserService,
    DataFetcherService,
    LingGeneratorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

