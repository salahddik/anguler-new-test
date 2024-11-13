import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HomeComponent } from './page/home.component'; 
import { homeRoutingModule } from './home.routing';
import { TextComponentComponent } from './components/text-component/text-component.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';

@NgModule({
  imports: [
    CommonModule,
    homeRoutingModule // Import the routing module here
  ],
  declarations: [
    HomeComponent,
    TextComponentComponent,
    ImageComponentComponent
=======
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
  ]
})
export class HomeModule { }
