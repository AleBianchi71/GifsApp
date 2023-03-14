import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchGIFResponse } from "../interface/gifs.interface";

@Injectable({
  providedIn: "root",
})
export class GifService {
  private apiKEy      : string = 'ikPubWT1cbbPKjLyHrgDPteoNPP7H3kQ';
  private servicioUrl : string = 'http://api.giphy.com/v1/gifs';
  private _historial  : string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    //regresa un nuevo arreglo
    return [...this._historial];
  }
  
 //permite hacer peticiones a la API sin usar promesas
  constructor(private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //guarda en memoria
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)|| []
       }
              

  buscarGifs(query: string= '') {
    query = query.trim().toLocaleLowerCase();           //verifica que no se repitan los elementos 
                                                        //con mayuscula o minuscula

    if (!this._historial.includes(query)) {             //verifica que no se repitan los elementos
      this._historial.unshift(query);                   //manda los elementos agregados primero en el arreglo
      this._historial = this._historial.splice(0, 10);  //verifica que solo se muestren 10 elementos

      localStorage.setItem('historial',JSON.stringify(this._historial)); //graba en el localStorage
     
    }
    
    const params = new HttpParams()
    .set('api_key',this.apiKEy)
    .set('limit', '10')
    .set('q', query);

  this.http.get<SearchGIFResponse>(`${this.servicioUrl}/search`,{params})
        .subscribe((resp) => {
          this.resultados = resp.data;
          localStorage.setItem('resultados',JSON.stringify(this.resultados));
    
  });
  }
}
