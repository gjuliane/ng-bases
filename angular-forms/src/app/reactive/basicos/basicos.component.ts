import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre':       new FormControl('RTX 4080ti'),
  //   'precio':       new FormControl(1500),
  //   'existencias':  new FormControl(5)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null,[Validators.required, Validators.min(0)]],
    existencias: [null,[Validators.required, Validators.min(0)]]
  });

  labelError = {
    nombre: '',
    precio: '',
    existencias: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //usar reset, en lugar se setValue para inicializar valores
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1500,
      // existencias: 7,
    })
  }

  guardar() {
    console.log(this.miFormulario.valid);
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    // Valid for posting
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  campoNoEsValido(campo: string) {
    const error = this.miFormulario.controls[campo].errors; // recojo el error
    let nuevo = {};

    if (error === null) {
      nuevo = {...nuevo,...{[campo]: ''}};
      this.labelError = {...this.labelError,...nuevo};
    } 
    else if(error.hasOwnProperty('minlength')) {
      nuevo = {
        ...nuevo,
        ...{
          [campo]: `
          Debe tener al menos ${error.minlength.requiredLength} caracteres,
          actualmente hay ${error.minlength.actualLength}.`
        }
      };
      this.labelError = {...this.labelError,...nuevo};
    } 
    else if(error.hasOwnProperty('required')) {

      nuevo = {...nuevo, ...{[campo]: 'Este campo es requerido'}};
      this.labelError = {...this.labelError,...nuevo};

    } else if (error.hasOwnProperty('min')) {

      nuevo = {...nuevo, ...{[campo]: `Valor mínimo es ${error.min.min}, actual es ${error.min.actual}`}};
      this.labelError = {...this.labelError,...nuevo};

    } else {

      this.labelError = {...this.labelError};

    }

    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched;
  }
}
