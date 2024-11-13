import { Component, OnInit } from '@angular/core';
import { post } from '../../../shared/interface/post.interface'; 
import { ApiService } from '../../../shared/Service/api.service'; 
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-postsapi',
  templateUrl: './postsapi.component.html',
  styleUrl: './postsapi.component.scss'
})
export class PostsapiComponent implements OnInit {
  posts$!: Observable<post[]>; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.posts$ = this.apiService.getPosts().pipe(
      catchError((error) => {
        console.error('An error occurred while fetching posts:', error);
        return of([]); 
      })
    );
  }
}
