import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parrafos',
  templateUrl: './parrafos.component.html',
  styleUrls: ['../../../forms.css']
})

export class ParrafosComponent implements OnInit {

  private parr1:any[];

  constructor(private _router: Router,
              private _srvConsulta:ConsultaService) {  }

  ngOnInit() {

    //this._srvConsulta.getPosts();
    this._srvConsulta.getParrafos().subscribe(resp => {
      //console.log(resp);
    });

  }

  editarRegistro(idParrafo:number){
    this._router.navigate(['/parrafo', idParrafo]);
  }

}
