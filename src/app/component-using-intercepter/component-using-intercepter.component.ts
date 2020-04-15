import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-using-intercepter',
  templateUrl: './component-using-intercepter.component.html',
  styleUrls: ['./component-using-intercepter.component.css']
})
export class ComponentUsingIntercepterComponent {

  title = 'Not Using Interceptor Demo';
  bookList: any = [];
  book: any = [];
  constructor(private http: HttpClient) {
  }

  var1: any;

  GetBookList() {
    //this.teams = this.http.get('http://localhost:3000/api/teams?callback=foo')
    this.bookList = this.http.get('/api/Books').subscribe(
      result => {
        this.book = result;
      }
    )
  }
  trackByMethod(index: number, el:any):number{
    return el.id;
  }
}