import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-couter-output',
  templateUrl: './couter-output.component.html',
  styleUrls: ['./couter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number =0 ;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }
}
