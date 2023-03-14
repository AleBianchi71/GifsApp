import { Component } from '@angular/core';
import { GifService } from '../service/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',

})
export class ResultadosComponent {


get resultados(){
  return this.gifsService.resultados;
}

  constructor(private gifsService: GifService){}

}
