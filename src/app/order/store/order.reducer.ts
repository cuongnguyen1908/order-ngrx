import { Order } from './../../models/order.model';

import * as OrderActions from './order.actions';

export interface State {
  orders: Order[];
}
const initialState: State = {
  orders: [
    new Order('A123', '0123123', 'HCM 1', 'new'),
    new Order('E12', '0123123', 'Singapore 2', 'entered'),
    new Order('A1F2', '0123123', 'New York 3', 'delivery'),
    new Order('A3A123', '0123123', 'HCM 1', 'delivered'),
    new Order('F23', '0123123', 'HN 4', 'success'),
  ],
};
export function orderReducer(
  state: State = initialState,
  action: OrderActions.OrderActions
) {
  switch (action.type) {
    // case OrderActions.OderActionTypes.GET_ORDER_NEW: {
    //     const filterOrder = state.orders.filter(order => {
    //       order.status == 'new';
    //     })
    //     return {
    //       ...state,
    //       orders: filterOrder
    //     }
    // }

    case OrderActions.OderActionTypes.ODER_CHANGE: {
      //find index
      const order = state.orders.filter((o) => {
        return o.orderCode == action.payload.orderCode;
      });

      const index = state.orders.findIndex((i) => {
        return i.orderCode == action.payload.orderCode;
      });


      const updatedOrder = {
        ...order,
        ...action.payload
      };


      const updatedOrders = [...state.orders];
      updatedOrders[index] = updatedOrder;
      return {
        ...state,
        orders: updatedOrders,
      };
    }
    default:
      return state;
  }
}
