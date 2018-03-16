import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as path from 'path';
import {SingleArticleComponent} from './single-article/single-article.component';
import {NewsListComponent} from './news-list/news-list.component';

const routes: Routes = [
  {path: 'articles', component: NewsListComponent},
  {path: 'article', component: SingleArticleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsListComponent, SingleArticleComponent];

