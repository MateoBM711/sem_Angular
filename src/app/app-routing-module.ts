import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeclanCatalog } from './teclan-catalog/teclan-catalog';
import { Cart } from './cart/cart';
import {TeclanAbout} from './teclan-about/teclan-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: TeclanCatalog,
  },
  {
    path: 'about',
    component: TeclanAbout,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
