import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { AboutRoutingModule } from './about.routing';
import { MainAboutComponent } from './page/main-about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule // Import the routing module here
  ],
  declarations: [
    MainAboutComponent
=======
import { RouterModule } from '@angular/router';
import { MainAboutComponent } from './page/main-about.component';

@NgModule({

  imports: [
    MainAboutComponent,
    CommonModule, 
    RouterModule.forChild([
        { path: '', component: MainAboutComponent } 
    ])
  ],

  declarations: [

  
>>>>>>> cc881b83a1186c50ce6b0ebfd67c6a4522c08851
  ]
})
export class AboutModule {}
