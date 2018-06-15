import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Order } from '../../models/order';
import { Customer } from '../../models/customer';
import { AuthService } from '../../core/auth.service';
import { OrderService } from '../../core/order.service';
import { CustomerService } from '../../core/customer.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operator/filter';
import { getLocaleDateFormat, FormatWidth } from '@angular/common';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent implements OnInit {
  // tab index //
  selectedIndex = 0;

  // customer select form //
  selectedCustomer;
  searchTerm = new EventEmitter<string>();
  customers = [];
  customerFiltered = [];
  customerLoading = false;

  // order info //
  invoiceNum = '';
  timestamp = new Date().getTime();
  date = new FormControl(new Date());
  remark = '';
  items = '';  

  constructor(private router: Router, private auth: AuthService, private orderService: OrderService, private customerService: CustomerService) {  }

  ngOnInit() {
    this.customerLoading = true;
    this.customerService.customerStream.subscribe(src => {
      this.customers = src;
      this.customers.map(item => item.searchkey = item.name + item.tel + item.addr);
      this.customerFiltered = this.customers;
      this.customerLoading = false;
    });    
    this.searchTerm.subscribe(term => this.customSearch(term));
  }

  private customSearch(searchTerm) {
    if(searchTerm){
      const term = searchTerm.toUpperCase();
      this.customerFiltered = this.customers.filter(item => item.searchkey.toUpperCase().indexOf(term) > -1);
      // this.customerFiltered = this.customers.filter(item => item.name.toUpperCase().indexOf(term) > -1 || item.tel.indexOf(term) > -1 || item.addr.toUpperCase().indexOf(term) > -1);
    }else{
      this.customerFiltered = this.customers;
    }
}

  onCancel(): void {
    var mydate = new Date('2018/1/1');
    console.log(this.orderService.formatDate(this.date.value));
    console.log(mydate.toLocaleDateString('ja-JP', {year: 'numeric', month: '2-digit', day: '2-digit' }));
  }

  onSubmit(): void{
    
    try {
      console.log('this.invoiceNum2', this.invoiceNum);
      
      const order = new Order({
        uid: this.auth.currentUserId,
        date: this.orderService.formatDate(this.date.value),
        remark: this.remark,
        customer: this.selectedCustomer,
      });

      // console.log(order);
      
      this.orderService.add(order);

      //this.router.navigate(['/orderlist']);
    }catch (e){
      console.log('Submit failed', e);
    }
  }
}
