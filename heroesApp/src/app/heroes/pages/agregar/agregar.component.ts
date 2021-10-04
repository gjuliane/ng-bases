import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap  } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius:5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marver Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_image:''
  }
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.router.url);
    if (!this.router.url.includes('editar')) {
      return;
    }
    


    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id) )
    )
    .subscribe( heroe => this.heroe = heroe )
  }

  guardar(){
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
  console.log(this.heroe.id);
    if( this.heroe.id){
      // actualizar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe( heroe => console.log("Actualzando", heroe) )
    } else {
      //Crear
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe( heroe => {
        this.router.navigate( ['/heroes/editar', heroe.id] );
      } );
    }
  
      
  }
}
