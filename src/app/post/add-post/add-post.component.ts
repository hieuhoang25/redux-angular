import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../model/state.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(private appState: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
      ,
      description: new FormControl(null,[
        Validators.required,
        Validators.minLength(10)
      ])
    })
  }
  onAddPost(){
   if (!this.postForm.valid){
     return;
   }
   const post: Post = {
    title: this.postForm.value.title,
    body: this.postForm.value.description
   }
   this.appState.dispatch(addPost({post}))
  }
  showDescriptionError(){
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid){
      if (descriptionForm.getError('required')){
        return "Title is required"
      }
      if (descriptionForm.getError('minlength')){
       return "Title should be at minimum 10 characters"
      }
    }
    return "";
  }
}
