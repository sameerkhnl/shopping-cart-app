import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductsComponent} from './products/products.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthGuard} from './_guards/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: SignInComponent},
  {path: 'logout', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
