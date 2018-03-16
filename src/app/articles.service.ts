import {Injectable} from '@angular/core';
import {ArticlesResponse} from './article';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticlesService {

  private _url = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b561fc10dd714a14a4eaf352d8d99208';

  constructor(private httpClient: HttpClient) {
  }

  getArticles() {
    return this.httpClient.get<ArticlesResponse>(this._url);
  }
}
