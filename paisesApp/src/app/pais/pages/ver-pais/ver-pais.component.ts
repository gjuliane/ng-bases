import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  // Suscribirnos a cualquier cambio de URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // Primera Forma
    // this.activateRoute.params
    //   .subscribe(({id}) => {
    //     console.log(id);
    //     this.paisService.buscarPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   })

    // Segunda Forma
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return this.paisService.buscarPaisPorAlpha(params.id);
        }),
        tap(console.log)
      )
      .subscribe( (pais: Country) => {this.pais = pais} );
  }

}
