import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Themes } from '../models/theme';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
events:Themes[]
  constructor(private service: ThemesService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  async getEvents() {
    this.events=[]
      await lastValueFrom(this.service.getEvents())
      this.events=this.service.events
      console.log(this.events)
      for (let i =0 ; i< this.events.length;i++){
        const theme_name=this.events[i].theme_name
        const party_name=this.events[i].party_type;
        
      const imgSingle='../assets/imgs/'+party_name+' '+theme_name+ ' flowers.jpg';
    this.events[i].img=imgSingle
    }
  
}
}
