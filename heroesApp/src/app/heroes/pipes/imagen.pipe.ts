import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if (heroe.id && heroe.id.length > 0) {
      return `assets/heroes/${heroe.id}.jpg`;
    }
    else {
      return `assets/no-image.jpg`;
    }
  }

}
