import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  readonly customerPath = "/customer";
  private ref: AngularFireList<any>;
  private snap: Observable<Customer[]>;

  constructor(db: AngularFireDatabase) {
    this.ref = db.list(this.customerPath);
    this.snap = this.ref.snapshotChanges().map(changes => {
      return changes.map(c => new Customer({ key: c.payload.key, ...c.payload.val()}));
    });
  }

  get customerStream(): Observable<any[]>{
    return this.snap;
  }

  add(customer:Customer) {
    this.ref.push(customer);
    console.log('Pushing customer', customer);
  }
}
