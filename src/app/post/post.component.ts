import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getPostSate, getPosts } from './state/post.selector';
import { Post } from './model/state.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getPosts).subscribe(data => this.posts = data )
  }

}
