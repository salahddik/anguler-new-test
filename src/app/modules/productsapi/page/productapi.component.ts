import { Component,OnInit } from '@angular/core';
import { ApiService } from '@shared/Service/api.service';
import { Product } from '@shared/interface/Product.interface'; 
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-productapi',
  templateUrl: './productapi.component.html',
  styleUrl: './productapi.component.scss',
})
export class ProductapiComponent implements OnInit {
  posts$!: Observable<Product[]>;  // Observable for async pipe

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.posts$ = this.apiService.getProducts().pipe(
      catchError((error) => {
        console.error('An error occurred while fetching products:', error);
        return of([]);  // Return an empty array in case of error
      })
    );
  }
}
