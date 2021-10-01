import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  idHeroe!: string;
  heroe!:Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   params => {
    //     this.idHeroe = params.id;
    //     this.heroeService.getHeroePorId(this.idHeroe).subscribe(
    //       heroe => this.heroe = heroe
    //     )
    //   }
    // )
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeService.getHeroePorId(id))
    )
    .subscribe(
      heroe => this.heroe = heroe
    );
  }

  regresar = () => this.router.navigate(['/heroes/listado'])
}
