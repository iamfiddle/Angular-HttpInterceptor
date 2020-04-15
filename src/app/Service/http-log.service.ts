import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpLogService {

  constructor() { }

  logDetails(type: string, color: string, message: string) {
    
    //console.log(`${type}: ${message}, 'background: #222; color: #bada55'`);
    console.log("%c"+ type+":"+ message, "color:"+color);
  }
}