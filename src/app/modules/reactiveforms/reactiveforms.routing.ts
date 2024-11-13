import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './page/reactiveform.component';

const routes: Routes = [
  { path: '', component: ReactiveformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class reactiveformRoutingModule {}

