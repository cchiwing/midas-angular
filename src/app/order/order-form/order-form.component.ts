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
// import { getLocaleDateFormat } from '@angular/common';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent implements OnInit {

  tabPage = 0;

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
  customer = '';
  remark = '';
  items = '';  

  constructor(private auth: AuthService, private orderService: OrderService, private customerService: CustomerService) {  }

  ngOnInit() {
    this.customerService.customerStream.subscribe(src => {
      this.customers = src;
      this.customerFiltered = src;
      this.customerLoading = false;

    });    
    this.searchTerm.subscribe(term => this.customSearch(term));
  }

  private customSearch(searchTerm) {
    if(searchTerm){
      const term = searchTerm.toUpperCase();
      this.customers.map(item => item.searchkey = item.name + item.tel + item.addr);
      this.customerFiltered = this.customers.filter(item => item.searchkey.toUpperCase().indexOf(term) > -1);
      // this.customerFiltered = this.customers.filter(item => item.name.toUpperCase().indexOf(term) > -1 || item.tel.indexOf(term) > -1 || item.addr.toUpperCase().indexOf(term) > -1);
    }else{
      this.customerFiltered = this.customers;
    }
}

  onCancel(): void {
    console.log('order-form result: ', this.customer +', '+ this.remark +', '+ this.items);
  }

  onSubmit(): void{
    try {
      // const order = new Order({
      //   client: this.client,
      //   remark: this.remark,
      //   items: this.items,
      //   timestamp: this.timestamp,
      //   authorKey: this.auth.currentUserId
      // });
      const order = new Order({
        uid: this.auth.currentUserId,
        customer: new Customer ({name: 'Mary', addr: 'Hong Kong', tel: '23174567'}),
        date: new Date().getTime()
      });

      console.log(order);
      
      this.orderService.add(order);
    }catch (e){
      console.log('Submit failed', e);
    }
  }
}
