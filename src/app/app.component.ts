import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!:string;
  cities=["Bogota","Madrid","Lima"]
  selection!:string;
  title = 'reto01';
  criterio=''
 

  addNewCity(city: string):void{
    this.cities.push(city);
  }

  onCityClicked(city: string): void{
    console.log('City ->',city);
    this.selection=city;
  }

  onClear():void{
    this.selection='' 
  }
}
