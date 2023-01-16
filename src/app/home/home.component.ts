import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Order } from '../models/orders';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  completed_orders:Order[];
  incompleted_orders:Order[];
  myDate = new Date();
  date = this.myDate.toLocaleString('en-us', {  weekday: 'long' })+' '+(this.myDate.getDate())+' '+this.myDate.toLocaleString('en-us', {  month: 'long' })+' '+this.myDate.getFullYear();
  role=localStorage.getItem('role');
quote: string;
  constructor(
    private auth : AuthService,
    private service:OrdersService,
    
  ) { }

  ngOnInit(): void {
    this.getinCompletedOrders();
    this.getCompletedOrders();
    this.getquote();
  }
  
logout(){
this.auth.logout()
}
async getCompletedOrders() {
 
  await lastValueFrom(this.service.getOrders('ready',this.role))
  this.completed_orders=this.service.orders
}

async getinCompletedOrders() {
    await lastValueFrom(this.service.getOrders2('not ready',this.role))
    this.incompleted_orders=this.service.orders2
    
    
  }
 async getquote(){
    this.quote= await lastValueFrom(this.auth.getQuote())
  }
  update(){
    
  }
}
