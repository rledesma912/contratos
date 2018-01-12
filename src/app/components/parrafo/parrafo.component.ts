import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-parrafo',
  templateUrl: './parrafo.component.html',
  styleUrls: []
})
export class ParrafoComponent implements OnInit {

  entParrafo: any = {};

  //ActivatedRoute para interpretar los queries strings.
  constructor(private _routing: ActivatedRoute,
              public _srv: ConsultaService ) { }

  ngOnInit() {

    this._routing.params
          //.map(parametros => parametros['id'])
          .subscribe( id => {
              console.log(`id: ${id.idParrafo}`);

              this._srv.getParrafoPorId(Number(id.idParrafo))
                .subscribe( ent => {
                  this.entParrafo = ent;
                  console.log(this.entParrafo);
                })
          });
  }

  CargarParrafo(id:number){
    console.log(id)
  }
}
