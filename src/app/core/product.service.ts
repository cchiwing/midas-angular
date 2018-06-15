import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Product } from '../models/product';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Injectable()
export class ProductService {
  readonly productPath = "/product";
  private ref: AngularFireList<any>;
  private snap: Observable<Product[]>;
  private term: Observable<string>;


  constructor(public db: AngularFireDatabase) { 
    this.ref = db.list(this.productPath);
    this.snap = this.ref.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => new Product({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  get stream(): Observable<Product[]> {
    return this.snap;
  }

  search(term: string): Observable<Product[]> {
    console.log('term = ', term);
    if (term) {
      return this.snap.map(items => items.filter(item =>{
        return item.tag.toUpperCase().includes(term.toUpperCase())
      }));
    }
    return this.snap;
  }

  add(product: Product) {
    console.log(product);
    this.ref.push(product);
  }

  update(key: string, product: Product) {
    console.log('update', 'value: ' + product);
    // this.ref.update(key, product);
  }

  delete(key: string) {
    console.log('delete key - ', key);
    if (key && key != ''){
      this.ref.remove(key);
    }
  }

  deleteAll() {
    this.ref.remove();
  }

}
