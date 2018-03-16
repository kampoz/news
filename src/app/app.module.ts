import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NewsListComponent} from './news-list/news-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
