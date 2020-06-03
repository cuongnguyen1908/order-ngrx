import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Order } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { OrderChange } from '../store/order.actions';


@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.scss']
})
export class OrderCancelComponent implements OnInit {

  orderCancel: Order[];
  constructor(private store: Store<fromApp.AppState>) { }

 ngOnInit(): void {
    this.store.select('orders').pipe(
      map(orderState => orderState.orders))
      .subscribe((orders: Order[]) => {
          this.orderCancel = orders.filter(item => item.status == 'cancel'
          )
      }
      )

  }

}
