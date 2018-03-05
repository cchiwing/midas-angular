import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  readonly orderPath = "/orders";
  private _ordersRef: AngularFireList<any>;
  private _ordersList: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this._ordersRef = this.db.list(this.orderPath);
    this._ordersList = this._ordersRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    });
    // console.log('orderObj: ', this._ordersList);
    // this._ordersList = db.list('orders');
    // console.log('orderObj: ', this._ordersList);
  }

  get ordersStream(): Observable<any[]> {
    return this._ordersList;
  }

  add(order: Order) {
    this._ordersRef.push(order);
    console.log('Pushing order', order);
  }

  update(key: string, order: Order){
    this._ordersRef.update(key, order);
  }

  delete(key: string) {
    this._ordersRef.remove(key);
  }

  clearAll(key: string) {
    this._ordersRef.remove();
  }
}
