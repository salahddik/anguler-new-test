import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class HomeModule { }
