import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Article, ArticlesResponse} from '../article';
import 'rxjs/add/operator/map';
import {ArticlesService} from '../articles.service';
import {errorObject} from 'rxjs/util/errorObject';
import {Router} from '@angular/router';


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
  public errorMsg;


  constructor(private _articleService: ArticlesService, private router: Router) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this._articleService.getArticles()
      .subscribe(data => {
        this.articles = data;
        console.log(this.articles);
      },
      error => this.errorMsg = error);
  }

  onSelect(article) {
    this.router.navigate(['/article', article.title]);
  }
}
