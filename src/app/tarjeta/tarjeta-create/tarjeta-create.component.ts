import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Tarjeta} from '../tarjeta';
import {TarjetaService} from '../tarjeta.service';
@Component({
  selector: 'app-tarjeta-create',
  templateUrl: './tarjeta-create.component.html',
  styleUrls: ['./tarjeta-create.component.css']
})
export class TarjetaCreateComponent implements OnInit {


  tarjetaForm: FormGroup;
  constructor( private tarjetaService: TarjetaService,
    private formBuilder: FormBuilder) {

       this.tarjetaForm = this.formBuilder.group({
      numero: ["", [Validators.required, Validators.minLength(16),Validators.maxLength(16)]],
      cvv: ["", Validators.required, Validators.maxLength(3), Validators.minLength(3)]
    });
     }


   createTarjeta(newTarjeta: Tarjeta)
   {
      this.tarjetaForm.reset();
   }
  ngOnInit() {
  }

}  