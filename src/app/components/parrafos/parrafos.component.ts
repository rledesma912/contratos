import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-parrafos',
  templateUrl: './parrafos.component.html',
  styleUrls: ['../../../forms.css']
})

export class ParrafosComponent implements OnInit {

  constructor(private _srvConsulta:ConsultaService) {

  }

  ngOnInit() {
  }

}
