import { OrderChange } from './../store/order.actions';
import { Order } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';


@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  orders: Order[];
  // listOrderNew$ = this.store.pipe(select(orderList => orderList.orders.orders));

  ngOnInit(): void {
    this.store.select('orders').pipe(
      map(orderState => orderState.orders))
      .subscribe((orders: Order[]) => {
          this.orders = orders.filter(item => item.status == 'new'
          )
      }
      )

  }

  onSubmit() {

  }
  onEntered(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'entered');
    this.store.dispatch(new OrderChange(newOrder));
  }

  onCancel(order: Order) {
    const orderCode = order.orderCode;
    const newOrder: Order = new Order(orderCode, order.phone, order.address, 'cancel');
    this.store.dispatch(new OrderChange(newOrder));
  }


}
