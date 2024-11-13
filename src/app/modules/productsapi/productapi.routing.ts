import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductapiComponent } from './page/productapi.component';

const routes: Routes = [
  { path: '', component: ProductapiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductapiRoutingModule {}
