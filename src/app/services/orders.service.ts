import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
orders:Order[]
orders1:Order[]
orders2:Order[]
  constructor(private http:HttpClient) { }
  getOrders(status:string,role:string){
    this.orders=[]
    return  this.http.get<{[key: string]: Order}>('http://localhost:3000/orders/'+role+'/'+status)
    .pipe(map((res)=>{
      for(const key in res){
        
        if(res.hasOwnProperty('_id')){
        this.orders.push({...res['_id'], id:key})
        console.log(this.orders)
      } 
     
    }
    }))
  }
  getOrders1(status:string,role:string){
    this.orders1=[]
    return  this.http.get<{[key: string]: Order}>('http://localhost:3000/orders/'+role+'/'+status)
    .pipe(map((res)=>{
      for(const key in res){
        
        if(res.hasOwnProperty(key)){
        this.orders1.push({...res[key], id:key})
   
       
      } 
     
    }
    }))
  }
  getOrders2(status:string,role:string){
    this.orders2=[]
    return  this.http.get<{[key: string]: Order}>('http://localhost:3000/orders/'+role+'/'+status)
    .pipe(map((res)=>{
      for(const key in res){
        
        if(res.hasOwnProperty(key)){
        this.orders2.push({...res[key], id:key})
       
 
       
      } 
     
    }
    }))
  }
}
