import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routing';
import { MainAboutComponent } from './page/main-about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule // Import the routing module here
  ],
  declarations: [
    MainAboutComponent
  ]
})
export class AboutModule {}
