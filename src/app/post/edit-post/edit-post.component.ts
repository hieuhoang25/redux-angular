import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/post.selector';
import { Post } from '../model/state.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postForm!: FormGroup;
  post!: Post
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      console.log(params)
      const id = params.get('id')
      this.store.select(getPostById, {id}).subscribe((data) =>{
        this.post = data;
      })
    })
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
  onUpdate() {

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
