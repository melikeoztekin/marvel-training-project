import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UiModule } from '@marvel-training-project/ui';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../marvel/src/app/shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { CartSummaryState } from '../../../marvel/src/app/store/cart-summary.state';
import { SelectCustomerState } from '../../../marvel/src/app/store/select-customer.state';
import { GetUserNameState } from '../../../marvel/src/app/store/navbar-info.state';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    UiModule,
    SharedModule,
    NgxsModule.forRoot([
      CartSummaryState,
      SelectCustomerState,
      GetUserNameState,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
