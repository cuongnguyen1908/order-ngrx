import { Order } from './../../models/order.model';

import { Action } from '@ngrx/store';
export enum OderActionTypes {
  GET_ORDER_NEW = '[Order] Get Oder New',
  ODER_CHANGE = '[Order] Get Oder Change',
  GET_ORDER_DELIVERY = '[Order] Get Oder Delivery',
  GET_ORDER_DELIVERED = '[Order] Get Oder Delivered',
  GET_ORDER_SUCCESS = '[Order] Get Oder Success',
  ORDER_NEW = '[Order] Oder New',
  ODER_ENTERED = '[Order] Oder Change Entered',
  ODER_DELIVERY = '[Order] Oder Change Delivery',
  ODER_DELIVERED = '[Order] Oder Change Delivered',
  ODER_SUCCESS = '[Order] Oder Change Success',
}

export class OrderNew implements Action {
  readonly type = OderActionTypes.ORDER_NEW;
}

export class OrderChange implements Action {
  readonly type = OderActionTypes.ODER_CHANGE;
  constructor(public payload: Order ) {}
}
export class OrderDelivery implements Action {
  readonly type = OderActionTypes.ODER_DELIVERY;
  constructor(public payload: Order) {}
}
export class OrderDelivered implements Action {
  readonly type = OderActionTypes.ODER_DELIVERED;
  constructor(public payload: Order) {}
}
export class OrderSuccess implements Action {
  readonly type = OderActionTypes.ODER_SUCCESS;
  constructor(public payload: Order) {}
}

export type OrderActions = OrderChange;
