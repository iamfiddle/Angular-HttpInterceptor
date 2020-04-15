import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ProgressbarService } from './../../Service/progressbar.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent {

  color='primary';
  mode='indeterminate';
  value=5000;

  constructor(private progressService: ProgressbarService){
  }
  
  isLoading: Subject<boolean>=this.progressService.isLoading;
}