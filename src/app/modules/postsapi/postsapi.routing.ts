import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsapiComponent } from './page/postsapi.component';

const routes: Routes = [
  { path: '', component: PostsapiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsapiRoutingModule {}
