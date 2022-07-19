import { Component, OnInit } from '@angular/core';
interface ContactForm
  {
    "name": string,
    "checkAdult": boolean,
    " department": string,
    "comment": string;
  }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  model=
    {
      name:"" ,
      checkAdult: true,
      department:"" ,
      comment: "...."
    }
  
  ngOnInit(): void {
  }

  onSubmit(values:any): void{
    console.log('Form values',values)
  }
}
