import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderNewComponent } from './order/order-new/order-new.component';
import { OrderEnteredComponent } from './order/order-entered/order-entered.component';
import { OrderDeliveryComponent } from './order/order-delivery/order-delivery.component';
import { OrderDeliveredComponent } from './order/order-delivered/order-delivered.component';
import { OrderSuccessComponent } from './order/order-success/order-success.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { orderReducer } from './order/store/order.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrderCancelComponent } from './order/order-cancel/order-cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderNewComponent,
    OrderEnteredComponent,
    OrderDeliveryComponent,
    OrderDeliveredComponent,
    OrderSuccessComponent,
    HeaderComponent,
    OrderCancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({orders: orderReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
