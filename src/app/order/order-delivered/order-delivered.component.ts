import { Order } from './../../models/order.model';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { OrderChange } from '../store/order.actions';
@Component({
  selector: 'app-order-delivered',
  templateUrl: './order-delivered.component.html',
  styleUrls: ['./order-delivered.component.scss']
})
export class OrderDeliveredComponent implements OnInit {
  orderDelivered: Order[];
  constructor(private store: Store<fromApp.AppState>) { }

 ngOnInit(): void {
    this.store.select('orders').pipe(
      map(orderState => orderState.orders))
      .subscribe((orders: Order[]) => {
          this.orderDelivered = orders.filter(item => item.status == 'delivered'
          )
      }
      )

  }
    onSuccess(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'success');
    this.store.dispatch(new OrderChange(newOrder));
  }

  onCancel(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'cancel');
    this.store.dispatch(new OrderChange(newOrder));
  }

}
