import { Component } from '@angular/core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import {WeatherService} from '../services/weather.service'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  faTemperatureLow = faTemperatureLow;
  faTemperatureHigh = faTemperatureHigh;
  faWind = faWind;
  faDroplet = faDroplet;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getWeather(this.city);
    this.city='';
  }

  city: string="cairo";

  weatherData:any;
  constructor(private _weatherService:WeatherService ){

    };


   private getWeather(city: string){
      this._weatherService.getWeatherData(this.city).subscribe(res=>{
        this.weatherData=res;
      })
    }

    onSubmit(){ //method to show temperature when user click on enter
      this.getWeather(this.city);
      this.city='';
    }

    showTemperature(){ //method to show temperature when user click on button
      this.getWeather(this.city);
      this.city='';
    }

}
