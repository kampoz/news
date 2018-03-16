import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  public title;
  public description;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.title = title;
    const description = this.route.snapshot.paramMap.get('description');
    this.description = description;
  }

}
