import { Store } from '@ngrx/store';
import { Order } from './../../models/order.model';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { OrderChange } from '../store/order.actions';
@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss']
})
export class OrderDeliveryComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }
  orderDeliveryList: Order[];
 ngOnInit(): void {
    this.store.select('orders').pipe(
      map(orderState => orderState.orders))
      .subscribe((orders: Order[]) => {
          this.orderDeliveryList = orders.filter(item => item.status == 'delivery'
          )
      }
      )

  }

  onDelivered(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'delivered');
    this.store.dispatch(new OrderChange(newOrder));
  }

  onCancel(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'cancel');
    this.store.dispatch(new OrderChange(newOrder));
  }

}
