import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News App';
  constructor(private httpClient: HttpClient) { }
  write() {
    document.write('write text');
  }
  doGET() {
    console.log('GET');
  }
}
