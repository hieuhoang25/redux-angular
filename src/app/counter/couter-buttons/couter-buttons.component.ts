import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/counter/state/couter.action';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-couter-buttons',
  templateUrl: './couter-buttons.component.html',
  styleUrls: ['./couter-buttons.component.css']
})
export class CouterButtonsComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset());
  }
}
