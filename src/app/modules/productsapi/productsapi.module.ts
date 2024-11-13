import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductapiRoutingModule } from './productapi.routing';
import { ProductapiComponent } from './page/productapi.component';
import { ApiService } from '../../shared/Service/api.service'; 
import { HttpClientModule } from '@angular/common/http';  

@NgModule({
  declarations: [
    ProductapiComponent
  ],
  imports: [
    CommonModule,
    ProductapiRoutingModule, 
    HttpClientModule  
  ],
  providers: [
    ApiService  
  ]
})
export class ProductapiModule {}
