import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {Article} from '../article';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  public title;
  article: Article;
  // description: string;

  constructor(private route: ActivatedRoute, private _data: DataService) {
  }

  ngOnInit() {
    this._data.article.subscribe((article: Article) => {
      this.article = article;
      console.log('SingleArticleComponent ngOnInit() in LAMBDA');
      console.log(article.title);
    });
    console.log('SingleArticleComponent');
    console.log(this.article.description);


    const title = this.route.snapshot.paramMap.get('title');
    this.title = title;

  }

}
