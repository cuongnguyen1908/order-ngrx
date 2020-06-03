import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Order } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';


@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }
  orderSuccess: Order [];
  ngOnInit(): void {
    this.store.select('orders').pipe(
      map(orderState => orderState.orders))
      .subscribe((orders: Order[]) => {
          this.orderSuccess = orders.filter(item => item.status == 'success'
          )
      }
      )

  }

}
