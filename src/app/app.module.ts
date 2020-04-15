import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatStepperModule, MatProgressSpinnerModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { HttpSharedIntercepterService } from './HttpInterceptors/http-shared-intercepter.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';
import {MatButtonModule} from '@angular/material/button';
import { ComponentNotUsingInterceptorComponent } from './component-not-using-interceptor/component-not-using-interceptor.component';
import { ComponentUsingIntercepterComponent } from './component-using-intercepter/component-using-intercepter.component';

const route: Routes=
[
  {path: '', component: ComponentUsingIntercepterComponent},
  {path: 'NotUsing', component: ComponentNotUsingInterceptorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    ComponentNotUsingInterceptorComponent,
    ComponentUsingIntercepterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule.forRoot
    (
      route
    )
    ],
  providers: [   
   {provide: HTTP_INTERCEPTORS, useClass: HttpSharedIntercepterService, multi:true}   
  ],
  bootstrap: [AppComponent],
  exports:[],
  entryComponents:[]
})
export class AppModule { }