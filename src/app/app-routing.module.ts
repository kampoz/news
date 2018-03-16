import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as path from 'path';
import {SingleArticleComponent} from './single-article/single-article.component';
import {NewsListComponent} from './news-list/news-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/articles', pathMatch: 'full'},
  {path: 'articles', component: NewsListComponent},
  {path: 'article', component: SingleArticleComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsListComponent, SingleArticleComponent, PageNotFoundComponent];

