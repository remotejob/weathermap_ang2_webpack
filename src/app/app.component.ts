import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { HttpIpService } from "./app.service";
@Component({
  selector: 'my-app',
  providers: [HttpIpService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  client: Object;
  weatherObj: Object; 
  
 

  constructor(public _httpIpService: HttpIpService) {

  }


ngOnInit() {
 

    console.log('hello `About` component');

 
   }
    
   getWeather() {

     console.log("OK3")
     this._httpIpService.getWeatherRestful(this.client).subscribe(
      data => this.weatherObj = data,
      error => console.log("Error HTTP GET Service"), // in case of failure show this message
      () => console.log("end")//run this code in all cases
      );
     


   }

     saveClient(value: any) {
 
  
    this._httpIpService.getEmailRestful()
      .subscribe(
      // data => this.client = JSON.stringify(data), // put the data returned from the server in our variable
      
      data => this.client = data,
      error => console.log("Error HTTP GET Service"), // in case of failure show this message
      () => this.getWeather()//run this code in all cases
      );
  }
 }

