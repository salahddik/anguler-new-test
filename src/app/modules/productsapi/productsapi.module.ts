import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ProductapiRoutingModule } from './productapi.routing';
import { ProductapiComponent } from './page/productapi.component';
import { ApiService } from '../../shared/Service/api.service'; 
import { HttpClientModule } from '@angular/common/http';  
=======
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from '../../shared/Service/api.service'; 
import { HttpClientModule } from '@angular/common/http';
import { ProductapiComponent } from './page/productapi.component';  

const routes: Routes = [
  { path: '', component: ProductapiComponent }
];
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851

@NgModule({
  declarations: [
    ProductapiComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    ProductapiRoutingModule, 
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
export class ProductapiModule {}
=======

})
export class ProductapiModule { }
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
