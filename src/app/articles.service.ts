import { Injectable } from '@angular/core';
import {Article, ArticlesResponse} from './article';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ArticlesService {
  public articles: Array<Article> = [];

  constructor(private httpClient: HttpClient) { }

  getNews() {
    this.httpClient.get<ArticlesResponse>
    ('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b561fc10dd714a14a4eaf352d8d99208')
      .subscribe((data) => {
        this.articles = data.articles;
        console.log(this.articles);
      });
    return this.articles;
  }

}
