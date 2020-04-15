import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-component-not-using-interceptor',
  templateUrl: './component-not-using-interceptor.component.html',
  styleUrls: ['./component-not-using-interceptor.component.css']
})
export class ComponentNotUsingInterceptorComponent {

  title = 'Not Using Interceptor Demo';
  bookList: any = [];
  book: any = [];
  constructor(private http: HttpClient, private handler: HttpBackend) {
  }

  var1: any;

  GetBookList() {
    //this.teams = this.http.get('http://localhost:3000/api/teams?callback=foo')
    this.http = new HttpClient(this.handler);
    this.bookList = this.http.get('/api/Books').subscribe(
      result => {
        this.book = result;
      }
    )
  }
}
