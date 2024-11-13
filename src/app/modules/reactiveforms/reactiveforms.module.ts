import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { ReactiveformComponent } from './page/reactiveform.component'; // Import the component
import { reactiveformRoutingModule } from './reactiveforms.routing'; // Import the routing module

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    reactiveformRoutingModule // Import the routing module here
  ],
  declarations: [
    ReactiveformComponent // Declare the component here
  ]
})
export class ReactiveformsModule {}
