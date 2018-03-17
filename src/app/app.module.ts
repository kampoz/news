import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import {AppComponent} from './app.component';
import {ArticlesService} from './articles.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ArticlesService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

