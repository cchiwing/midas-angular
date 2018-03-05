import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(public orderService: OrderService) { 
  }

  ngOnInit() {
  }

}
