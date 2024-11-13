import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { PostsapiRoutingModule } from './postsapi.routing';
=======
import { Routes, RouterModule } from '@angular/router';
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
import { PostsapiComponent } from './page/postsapi.component';
import { ApiService } from '../../shared/Service/api.service'; 
import { HttpClientModule } from '@angular/common/http';  

<<<<<<< HEAD
=======
const routes: Routes = [
  { path: '', component: PostsapiComponent }
];

>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
@NgModule({
  declarations: [
    PostsapiComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    PostsapiRoutingModule, // Import the routing module here
    HttpClientModule  
=======
    RouterModule.forChild(routes),HttpClientModule  
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
  ],
  providers: [
    ApiService  
  ]
<<<<<<< HEAD
})
export class PostsapiModule {}
=======

})
export class PostsapiModule { }
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
