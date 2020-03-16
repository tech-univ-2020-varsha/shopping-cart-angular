import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartPageComponent} from './cart-page/cart-page.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cart', component: CartPageComponent },
  {path: 'home', component: FilterBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
