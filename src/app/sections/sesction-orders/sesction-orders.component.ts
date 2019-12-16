import { Order } from './../../shared/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesction-orders',
  templateUrl: './sesction-orders.component.html',
  styleUrls: ['./sesction-orders.component.css']
})
export class SesctionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1, customer:
        { id: 1, name: 'Jan', state: 'C0', email: 'abc@eample.com' },
      total: 230, placed: new Date(2019, 11, 1), fulfilled: new Date(2019, 11, 2)
    },
    {
      id: 2, customer:
        { id: 1, name: 'Jan', state: 'C0', email: 'abc@eample.com' },
      total: 230, placed: new Date(2019, 11, 1), fulfilled: new Date(2019, 11, 2)
    },
    {
      id: 3, customer:
        { id: 1, name: 'Jan', state: 'C0', email: 'abc@eample.com' },
      total: 230, placed: new Date(2019, 11, 1), fulfilled: new Date(2019, 11, 2)
    },
    {
      id: 4, customer:
        { id: 1, name: 'Jan', state: 'C0', email: 'abc@eample.com' },
      total: 230, placed: new Date(2019, 11, 1), fulfilled: new Date(2019, 11, 2)
    },
    {
      id: 5, customer:
        { id: 1, name: 'Jan', state: 'C0', email: 'abc@eample.com' },
      total: 230, placed: new Date(2019, 11, 1), fulfilled: new Date(2019, 11, 2)
    }
  ];

  ngOnInit() {
  }

}
