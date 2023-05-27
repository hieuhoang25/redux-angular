import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChanelName, customIncrement } from '../state/couter.action';
import { getChannelName } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent implements OnInit {
  value:number = 0;
  channelName: string='';
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  this.store.select(getChannelName).subscribe(data => this.channelName = data);
  }

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  onAddChannelName(){
      this.store.dispatch(changeChanelName());
  }
}
