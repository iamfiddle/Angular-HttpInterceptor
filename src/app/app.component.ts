import { Component } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor Demo';
  bookList: any=[];
  book: any=[];
  constructor(private http: HttpClient) {
  }

  var1: any;

  // GetBookList() {
  //   //this.teams = this.http.get('http://localhost:3000/api/teams?callback=foo')
  //   this.bookList = this.http.get('/api/Books').subscribe(
  //     result => {
  //       this.book = result;
        
  //       //var arr = Object.entries(result).map(([type, value]) => ({type, value}));
  //       //console.log(arr);
  //     }
    //)
  //}
}
