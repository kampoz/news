import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private articlesSubject = new BehaviorSubject<any>([]);
  article = this.articlesSubject.asObservable();

  constructor() {
  }

  changeArticle(article) {
    this.articlesSubject.next(article);
  }

}
