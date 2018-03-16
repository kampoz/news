import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {forEach} from '@angular/router/src/utils/collection';
import {Article, ArticlesResponse} from '../article';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  json: JSON;
  public articles: Array<Article> = [];


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<ArticlesResponse>
    ('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b561fc10dd714a14a4eaf352d8d99208')
      .map(data => data.articles)
      .subscribe((articles) => {
        this.articles = articles;
        console.log(this.articles);
      });
  }
}
