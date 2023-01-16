import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Order } from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
role="flower";
delivered_orders:Order[];
  constructor(private service : OrdersService) { }

  ngOnInit(): void {
  this.getDeliveredOrders();
  }

  async getDeliveredOrders() {
    await lastValueFrom(this.service.getOrders2('delivered',this.role))
    this.delivered_orders=this.service.orders2
    
    
  }

}
