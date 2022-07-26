import { Component, Input,ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="btn btn-primary">{{label}}</button>`,
 
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 

})
export class ButtonComponent {

  
  @Input() label!:string;
  

  counterRender():boolean{
    console.log('Render button')
    return true;
  }

}
