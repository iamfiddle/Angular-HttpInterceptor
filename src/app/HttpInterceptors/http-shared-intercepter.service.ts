import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import {tap, finalize} from 'rxjs/operators';
import { ProgressbarService } from './../Service/progressbar.service';
import { LogVariables, LogCSS } from './../Service/log-variables';
import { HttpLogService } from './../Service/http-log.service';
import { delay } from 'q';

@Injectable()
export class HttpSharedIntercepterService implements HttpInterceptor{

  constructor(private logservice: HttpLogService, private progressService:ProgressbarService ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    const startTime = Date.now();
    let status: string;

    const requestWithAuthHeader=request.clone({
      headers:request.headers.set("Authorization", "AuthCode")
    });
    this.logservice.logDetails(LogVariables.Info, LogCSS.Success, `Added AuthCode to Api request URL header: ${requestWithAuthHeader.url}`);
    delay(1000000);

    this.logservice.logDetails(LogVariables.Info, LogCSS.Info, `About to call requested URL: ${requestWithAuthHeader.url}`);
    this.progressService.show();
    delay(1000000);

    return next.handle(requestWithAuthHeader).pipe(

      tap(        
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
            this.logservice.logDetails(LogVariables.Info, LogCSS.Success, `Called api successfully: ${event.url}`);
          }
        },
        error => {
          status = 'failed';
          this.logservice.logDetails(LogVariables.Error,LogCSS.Error, `Error calling api ${event}`);
        }
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = `Http Method: ${request.method} Parameter: ${request.urlWithParams} ${status} in ${elapsedTime}  ms`;
        
        this.logservice.logDetails(LogVariables.Info, LogCSS.Warning, message);
        this.progressService.hide();
      })
    );
  }
}