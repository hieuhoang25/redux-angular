import { Route, RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./post.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postReducer } from "./state/post.reducer";

const routes : Routes = [
    {
        path: "",
        component: PostComponent,
        children: [
            {
                path: "edit/:id",
                component: EditPostComponent
            }
            ,{
                path: "add",
                component: AddPostComponent
            }
        ]
    },
   
]
@NgModule({
    declarations: [ 
        PostComponent,
        AddPostComponent,
        EditPostComponent],
        // LAYZY load state
    imports:[CommonModule, FormsModule,    ReactiveFormsModule ,RouterModule.forChild(routes), StoreModule.forFeature('post',postReducer)]
})
export class PostModule{};