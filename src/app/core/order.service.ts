import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class OrderService {
  readonly orderPath = "orders";
  private _ordersStream: AngularFireList<Order>;

  constructor(private db: AngularFireDatabase) { 
    this._ordersStream = this.db.list(this.orderPath);
  }

  add(order: Order) {
    this._ordersStream.push(order);
    console.log('Pushing order', order);
  }
}
