import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial (): string[] {
    return this.gisfService.historial;
  }

  constructor( private gisfService: GifsService) { 
  }

  buscar = (termino: string) => {
    this.gisfService.buscarGifs(termino);
  }

}
