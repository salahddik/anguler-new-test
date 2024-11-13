import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsapiRoutingModule } from './postsapi.routing';
import { PostsapiComponent } from './page/postsapi.component';
import { ApiService } from '../../shared/Service/api.service'; 
import { HttpClientModule } from '@angular/common/http';  

@NgModule({
  declarations: [
    PostsapiComponent
  ],
  imports: [
    CommonModule,
    PostsapiRoutingModule, // Import the routing module here
    HttpClientModule  
  ],
  providers: [
    ApiService  
  ]
})
export class PostsapiModule {}
