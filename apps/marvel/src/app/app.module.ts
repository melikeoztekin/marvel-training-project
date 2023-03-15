import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UiModule } from '@marvel-training-project/ui';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxsModule } from '@ngxs/store';
import { CartSummaryState } from './store/cart-summary.state';
import { SelectCustomerState } from './store/select-customer.state';
import { GetUserNameState } from './store/navbar-info.state';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UiModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
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
