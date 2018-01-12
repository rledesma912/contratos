import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultaService {

  private parrafos:any[];
  private entidadParrafo:any;
  private urlAPI: string = 'https://jsonplaceholder.typicode.com/';

  //api de prueba: https://jsonplaceholder.typicode.com/posts
  constructor(public http:HttpClient) {

    console.log('Servicio listo para usar');

    }

    getParrafos(){
      let url = `${this.urlAPI}posts`;
      return this.http.get(url)
          //.map( resp => 'carrito');
          .map( (resp:any) => {
            this.parrafos = resp;
            return this.parrafos;
        });
  }

  getParrafoPorId(idParrafo:number){
    let url = `${this.urlAPI}posts/${idParrafo}`;

    return this.http.get(url)
        .map( (resp:any) => {
          this.entidadParrafo = resp;
          return this.entidadParrafo;
      });
  }

  getPosts(){
    let url = "https://jsonplaceholder.typicode.com/posts";

    /*
    let headers = new HttpHeaders({
      'authorization':'sss'
    })
    */

    /*
      //no es ideal tener subscribe en el servicio.
      this.http.get(url)
        .subscribe(resp => {
          console.log(resp[0].title);
        });
    */

      return this.http.get(url);
  }


}
