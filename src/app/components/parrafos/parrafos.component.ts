import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-parrafos',
  templateUrl: './parrafos.component.html',
  styleUrls: ['../../../forms.css']
})

export class ParrafosComponent implements OnInit {

  private parr1:any[];

  constructor(private _srvConsulta:ConsultaService) {  }

  ngOnInit() {

    //this._srvConsulta.getPosts();

    this._srvConsulta.getParrafos().subscribe(resp => {
      console.log(resp);
    });

  }

  alertar(mensaje:string){
    console.log(mensaje);
    '#exampleModalLong'.modal('show');
  }

}
