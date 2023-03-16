import { Route } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { RegisterComponent } from './shared/pages/register/register.component';
import { CustomerStoreComponent } from './shared/pages/customer-store/customer-store.component';
import { AdminPageComponent } from './shared/pages/admin-page/admin-page.component';
import { ProductDetailsComponent } from './shared/pages/product-details/product-details.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UserAdminGuard } from './core/guards/userAdmin.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'customer-store',
    component: CustomerStoreComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard, UserAdminGuard],
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  },
];
