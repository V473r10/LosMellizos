import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { StoreComponent } from './pages/store/store.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'Store', component: StoreComponent, canActivate: [AuthGuard] },
  { path: 'Summary', component: SummaryComponent, canActivate: [AuthGuard] },
  { path: 'Cart', component: CartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
