import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UiModule } from '@marvel-training-project/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { CustomerStoreComponent } from './pages/customer-store/customer-store.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductSummaryListComponent } from './components/product-summary-list/product-summary-list.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductDetailCardListComponent } from './components/product-detail-card-list/product-detail-card-list.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ErrorMessagesComponent,
    CustomerStoreComponent,
    ProductCardListComponent,
    NavbarComponent,
    FooterComponent,
    ProductSummaryListComponent,
    AdminPageComponent,
    CustomerInfoComponent,
    AdminProductListComponent,
    CustomerListComponent,
    ProductDetailsComponent,
    CartSummaryComponent,
    ProductDetailCardListComponent,
  ],
  imports: [CommonModule, UiModule, FormsModule, ReactiveFormsModule],
  exports: [
    CustomerInfoComponent,
    ProductDetailsComponent,
    ProductCardListComponent,
    NavbarComponent,
    FooterComponent,
    AdminProductListComponent,
  ],
})
export class SharedModule {}
