import { Component, Input, Output,EventEmitter,ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: ` 
  <li  (click)="onCityClicked (city)"[ngClass]="{'alert alert-info':city === selection}">
      {{city | titlecase}}
  </li>

`,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CitiesComponent  {

  @Input() city!:string;
  @Input() selection!:string;

  @Output() cityClikedEvent = new EventEmitter<string>();
 
  onCityClicked(city:string):void{
    this.cityClikedEvent.emit(city);
  }

  counterRender():boolean{
    console.log('Render Cities')
    return true;
  }

}
