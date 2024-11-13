import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPnfComponent } from './page/main-pnf.component'; 
import { error404RoutingModule } from './error404.routing';

@NgModule({
  imports: [
    CommonModule,
    error404RoutingModule // Import the routing module here
  ],
  declarations: [
    MainPnfComponent
  ]
})
export class Error404Module {}
