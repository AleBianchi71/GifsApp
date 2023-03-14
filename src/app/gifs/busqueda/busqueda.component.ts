import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifService } from '../service/gif.service';

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
})

//Busqueda en el input
export class BusquedaComponent {
  @ViewChild("txtBuscar")
  txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifService){

  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    //verifica que el campo no este vacio
    if(valor.trim().length ===0){
      return;
    }

   this.gifsService.buscarGifs(valor);

    //despues de buscar borra lo que este en el input
    this.txtBuscar.nativeElement.value = "";
  }
}
