import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { MainPnfComponent } from './page/main-pnf.component'; 
import { error404RoutingModule } from './error404.routing';

@NgModule({
  imports: [
    CommonModule,
    error404RoutingModule // Import the routing module here
  ],
  declarations: [
    MainPnfComponent
=======
import { RouterModule } from '@angular/router';
import { MainPnfComponent } from './page/main-pnf.component'; 

@NgModule({

  imports: [
    MainPnfComponent,
    CommonModule, 
    RouterModule.forChild([
        { path: '', component: MainPnfComponent } 
    ])
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
  ]
})
export class Error404Module {}
