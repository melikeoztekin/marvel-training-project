import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomButtonComponent } from './atom-button/atom-button.component';
import { AtomInputComponent } from './atom-input/atom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomSelectComponent } from './atom-select/atom-select.component';
import { AtomHeaderComponent } from './atom-header/atom-header.component';
import { AtomToastrMessageComponent } from './atom-toastr-message/atom-toastr-message.component';
import { AtomBackgroundImageComponent } from './atom-background-image/atom-background-image.component';
import { AtomFrameComponent } from './atom-frame/atom-frame.component';
import { AtomImageContentFrameComponent } from './atom-image-content-frame/atom-image-content-frame.component';
import { MoleculeProductCardComponent } from './molecule-product-card/molecule-product-card.component';
import { AtomProductSummaryComponent } from './atom-product-summary/atom-product-summary.component';
import { AtomAdminProductItemComponent } from './atom-admin-product-item/atom-admin-product-item.component';
import { AtomCustomerListItemComponent } from './atom-customer-list-item/atom-customer-list-item.component';
import { AtomProductDetailSummaryComponent } from './atom-product-detail-summary/atom-product-detail-summary.component';
import { AtomProductDetailCardComponent } from './atom-product-detail-card/atom-product-detail-card.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../../../../apps/marvel/src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  declarations: [
    AtomButtonComponent,
    AtomInputComponent,
    AtomSelectComponent,
    AtomHeaderComponent,
    AtomToastrMessageComponent,
    AtomBackgroundImageComponent,
    AtomFrameComponent,
    AtomImageContentFrameComponent,
    MoleculeProductCardComponent,
    AtomProductSummaryComponent,
    AtomAdminProductItemComponent,
    AtomCustomerListItemComponent,
    AtomProductDetailSummaryComponent,
    AtomProductDetailCardComponent,
  ],
  exports: [
    AtomButtonComponent,
    AtomInputComponent,
    AtomSelectComponent,
    AtomHeaderComponent,
    AtomToastrMessageComponent,
    AtomBackgroundImageComponent,
    AtomFrameComponent,
    AtomImageContentFrameComponent,
    MoleculeProductCardComponent,
    AtomProductSummaryComponent,
    AtomAdminProductItemComponent,
    AtomCustomerListItemComponent,
    AtomProductDetailSummaryComponent,
    AtomProductDetailCardComponent,
  ],
})
export class UiModule {}
