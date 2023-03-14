import { Component } from '@angular/core';
import { GifService } from '../../gifs/service/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent {
  get historial(){
    return this.gifsService.historial;
  }


  constructor(private gifsService: GifService){}

  buscar(termino : string){
    this.gifsService.buscarGifs(termino);

  }
}
