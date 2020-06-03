import { Order } from './../../models/order.model';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { OrderChange } from '../store/order.actions';
@Component({
  selector: 'app-order-entered',
  templateUrl: './order-entered.component.html',
  styleUrls: ['./order-entered.component.scss']
})
export class OrderEnteredComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }
  oderEnteredList: Order[];
  ngOnInit(): void {
    this.store.select('orders').pipe(
      map(orderState => orderState.orders))
      .subscribe((orders: Order[]) => {
          this.oderEnteredList = orders.filter(item => item.status == 'entered'
          )
      }
      )

  }

  onDelivery(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'delivery');
    this.store.dispatch(new OrderChange(newOrder));
  }

  onCancel(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'cancel');
    this.store.dispatch(new OrderChange(newOrder));
  }

}
