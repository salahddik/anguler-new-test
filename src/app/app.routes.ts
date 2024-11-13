import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./modules/home/home.module').then(m => m.HomeModule),
    title: 'Home',
  },
  { 
    path: 'about', 
    loadChildren: () => 
      import('./modules/about/about.module').then(m => m.AboutModule),
    title: 'About' 
  },
  { 
    path: 'postsapi', 
    loadChildren: () => 
      import('./modules/postsapi/postsapi.module').then(m => m.PostsapiModule),
    title: 'Posts API' 
  },
  { 
    path: 'productsapi',
    loadChildren: () => 
      import('./modules/productsapi/productsapi.module').then(m => m.ProductapiModule),
    title: 'Products API',
  },
  { 
    path: 'reactiveforms',
    loadChildren: () => 
      import('./modules/reactiveforms/reactiveforms.module').then(m => m.ReactiveformsModule),
    title: ' reactive forms',
  },
  { 
    path: '**', 
    loadChildren: () => 
      import('./modules/error404/error404.module').then(m => m.Error404Module),
    title: 'Page not found' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // forRoot() is for the root routing module
  exports: [RouterModule]
})
export class AppRoutingModule {}