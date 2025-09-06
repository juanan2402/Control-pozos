import { Component, inject, OnInit, signal } from '@angular/core';
import { Pozos } from "../services/pozos";
import { Pozo} from "../model/pozos.type";
import { catchError } from 'rxjs';
//Componente general, compuesto del titulo, y las entradas para la lista
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit{
  pozoService = inject(Pozos);
  pozoItems = signal<Array<Pozo>>([]);
  ngOnInit(): void {
  this.pozoService.getFromAPI()
    .pipe(
      catchError((err) => {
        console.error('Error en la petición', err);
        throw err;
      })
    )
    .subscribe((pozo) => {
      console.log('Respuesta del backend:', pozo);
      this.pozoItems.set(pozo);
      console.log('Contenido en la señal:', this.pozoItems());
    });
}

}
