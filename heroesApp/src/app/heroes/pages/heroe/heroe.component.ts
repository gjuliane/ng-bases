import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  idHeroe!: string;
  heroe!:Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
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

}
