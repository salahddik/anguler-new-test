import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPnfComponent } from './page/main-pnf.component'; 

const routes: Routes = [
  { path: '', component: MainPnfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class error404RoutingModule {}
