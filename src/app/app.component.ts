import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  private card = [];
  baseUrl:string = 'https://api.magicthegathering.io/v1'

  constructor(private httpClient: HttpClient ) { }

  get_cards(){  
    return this.httpClient.get(this.baseUrl + '/cards').subscribe((res : any[])=>{
      this.card = res.cards;    
    });
  }
  
  title = 'Learning Angular API';

  
}

