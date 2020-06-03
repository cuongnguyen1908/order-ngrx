import * as fromOrders from '../order/store/order.reducer'
export interface AppState
{
  orders: fromOrders.State;
}
