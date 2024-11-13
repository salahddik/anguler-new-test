import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/Product.interface'; 
import { post } from '../interface/post.interface'; 
import { environment } from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;       
  private apiUrltow = environment.apiUrltow; 

  constructor(private http: HttpClient) { }

  getPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.apiUrltow);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}