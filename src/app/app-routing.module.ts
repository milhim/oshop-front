import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
// ,canActivate:[BeforeLoginService],
const routes: Routes = [
  { path: '', component: ProductsComponent,  },
  { path: 'my/orders', component: MyOrdersComponent,  },
  { path: 'products', component: ProductsComponent,  },
  { path: 'shopping-cart', component: ShoppingCartComponent,  },
  { path: 'check-out', component: CheckOutComponent,  },
  { path: 'order-success', component: OrderSuccessComponent,  },
  { path: 'login', component: LoginComponent,  },
  { path: 'signup', component: SignupComponent,  },
  { path: 'profile', component: ProfileComponent,  },
  { path: 'request-reset-password', component: RequestResetComponent,  },
  { path: 'response-reset-password', component: ResponseResetComponent,  },
//admin routes
{ path: 'admin/orders', component: AdminOrdersComponent,  },
{ path: 'admin/products/new', component: ProductFormComponent,  },
{ path: 'admin/products/:id', component: ProductFormComponent,  },
{ path: 'admin/products', component: AdminProductsComponent,  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
