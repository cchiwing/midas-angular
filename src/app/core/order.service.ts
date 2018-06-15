import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  readonly orderPath = "/order";
  private ref: AngularFireList<Order>;
  private snap: Observable<Order[]>;
  private index: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this.ref = this.db.list<Order>(this.orderPath);
    this.snap = this.ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    });

    this.index = this.ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.val().date, value: c.payload.val().invoiceNum}));
    });

  }

  get ordersStream(): Observable<Order[]> {
    return this.snap;
  }

  order(){
    this.snap
       .map(epics => epics
        .filter(epic => epic.$key === '-L6p9sbtTqlQ6kEzzlcX')
      ).subscribe(res => console.log('res: ', res));
  }

  orderByKey(key: string): any[]{
    var result: any[] = null;
    this.snap
       .map(orders => orders
        .filter(order => order.$key === key)
      ).subscribe(res => result = res);
    return result;
  }

  // Function //

  add(order: Order) {
    var invoiceNum: string;
    var invoiceDate = order.date;
    this.db.object(`orderIndex/${invoiceDate}/total`).query.ref.transaction(total => {
      total = total === null? 1 : (Number(total) +1);
      total = +total>9? total: '0'+total; 
      invoiceNum = invoiceDate + total;
      console.log('new total', total);
      return total;
    }).then(() => {
      order.invoiceNum = invoiceNum;
      console.log('new total', order);
      // this.ref.push(order);
      this.ref.set(invoiceNum, order);
    });
  }

  update(key: string, order: Order){
    this.ref.update(key, order);
  }

  delete(key: string) {
    this.ref.remove(key);
  }

  clearAll(key: string) {
    this.ref.remove();
  }

  // Tools //

  formatDate(date: Date): string{
    return date.toLocaleDateString('ja-JP', {year: '2-digit', month: '2-digit', day: '2-digit' }).split('/').join('');
  }


}
