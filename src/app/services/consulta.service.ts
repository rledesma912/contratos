import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ConsultaService {

  //api de prueba: https://jsonplaceholder.typicode.com/posts
  constructor(public http:HttpClient) {

    console.log("Servicio listo para usar");

    }

  getPosts(){
    let url = "https://jsonplaceholder.typicode.com/posts";

    let headers = new HttpHeaders({
      'authorization':'sss'
    })

    this.http.get(url)
        .subscribe(resp => {
          console.log(resp)
        });

  }


}
