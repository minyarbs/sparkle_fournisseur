import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Themes } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
events: Themes[]
  constructor(private http : HttpClient) { }
getEvents(){
  this.events=[]
  return  this.http.get<{[key: string]: Themes}>('http://localhost:3000/products')
  .pipe(map((res)=>{
    for(const key in res){
      if(res.hasOwnProperty(key)){
      this.events.push({...res[key], id:key})
     
    } 
   
  }
  }))
   

    
   

}
}
