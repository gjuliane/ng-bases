import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]], //[nombre, , sync, async]
    favoritos: this.fb.array([
      ['Metal Gear', [Validators.required,Validators.minLength(3)]],
      ['Death Stranding', [Validators.required,Validators.minLength(3)]]
    ], Validators.required) // Al menos un favorito requerido
  });

  labelError = {
    nombre: '',
    precio: '',
    existencias: ''
  };

  labelControlError: string = '';

  // Elemento aislado, no se conoce dentro del FormGroup
  // se tiene que enlazar con FormControl en el formulario
  nuevoFavoritoControl: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);


  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log("Posting");    
    console.log(this.miFormulario.value);
    
  }

  borrar(i: number) {
    console.log('Borrar');
    console.log(i);
    this.favoritosArr.removeAt(i);
    
  }

  agregarFavorito():any {
    if (this.nuevoFavoritoControl.invalid) {
      console.log('Invalid');
      this.nuevoFavoritoControl.markAllAsTouched();
      return false;
    }
    console.log(this.nuevoFavoritoControl.value);
    // this.favoritosArr.push(new FormControl(this.nuevoFavoritoControl.value, Validators.required)); // Forma 1
    this.favoritosArr.push(this.fb.control(
      this.nuevoFavoritoControl.value,[Validators.required, Validators.minLength(3)]
    ));
    this.nuevoFavoritoControl.reset();
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

  controlNoEsValido() {
    // const error = this.miFormulario.controls[campo].errors; // recojo el error
    const error = this.nuevoFavoritoControl.errors;

    if (error === null) {

      this.labelControlError = '';
      
    } 
    else if(error.hasOwnProperty('minlength')) {

      this.labelControlError = `
        Debe tener al menos ${error.minlength.requiredLength} caracteres,
        actualmente hay ${error.minlength.actualLength}.`;

    } 
    else if(error.hasOwnProperty('required')) {

      this.labelControlError = 'Este campo es requerido';

    } else if (error.hasOwnProperty('min')) {

      this.labelControlError =`Valor mínimo es ${error.min.min}, actual es ${error.min.actual}`

    } else {

      this.labelControlError = 'Validacion desconocida';

    }
    return this.nuevoFavoritoControl.errors
      && this.nuevoFavoritoControl.touched;
  }

}
