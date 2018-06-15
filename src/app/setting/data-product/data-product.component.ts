import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Product } from '../../models/product';
import { FormControl,FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-data-product',
  templateUrl: './data-product.component.html',
  styleUrls: ['./data-product.component.css']
})
export class DataProductComponent implements OnInit {
  private loading: boolean = false;
  private searchField: FormControl;
  private productList: Observable<Product[]>;
  newProduct: Product;

  constructor(public productService: ProductService) {  }

  ngOnInit() {
    this.newProduct = new Product();
    this.searchField = new FormControl();
    this.productList = this.productService.search('');
    this.searchField.valueChanges
        .do(() => this.loading = true)
        .debounceTime(400)
        .distinctUntilChanged()
        .map( term => this.productService.search(term))
        .do(() => this.loading = false)
        .subscribe( res => this.productList = res);

  }

}
