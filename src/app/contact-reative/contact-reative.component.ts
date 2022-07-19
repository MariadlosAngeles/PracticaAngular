import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reative',
  templateUrl: './contact-reative.component.html',
  styleUrls: ['./contact-reative.component.scss']
})
export class ContactReativeComponent implements OnInit {

  contactForm!:FormGroup;
  // myField = new FormControl();
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
   this.contactForm =this.initForm();
  }

  onSubmit():void{
    console.log('Form ->', this.contactForm.value)
  }

  initForm(): FormGroup{
    //Declarar propiedades que tendra el formulario
    //metodo que espera un objeto y el objeto que se le va a pasar sera la definicion de nuestro campo
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      checkAdult: ['',[Validators.required]],
      departament: [''],
      comment: ['',[Validators.required, Validators.maxLength(300)]]

    })
  }
}
