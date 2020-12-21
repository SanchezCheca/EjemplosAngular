import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];

  constructor() {
    const correo1 = {
      titulo: 'Titulo del correo 1',
      cuerpo: `Cuerpo del correo1. Cuerpo del correo1. Cuerpo del correo1. 
      Cuerpo del correo1. Cuerpo del correo1. Cuerpo del correo1. 
      Cuerpo del correo1. Cuerpo del correo1. Cuerpo del correo1. `,
      emisor: 'correoEmisor1@prueba.com',
      receptor: 'correoReceptor1@prueba.com',
      leido: true,
    };

    const correo2 = {
      titulo: 'Titulo del correo 2',
      cuerpo: `Cuerpo del correo2. Cuerpo del correo2. Cuerpo del correo2. 
      Cuerpo del correo2. Cuerpo del correo2. Cuerpo del correo2. 
      Cuerpo del correo2. Cuerpo del correo2. Cuerpo del correo2. `,
      emisor: 'correoEmisor2@prueba.com',
      receptor: 'correoReceptor2@prueba.com',
      leido: false,
    };

    const correo3 = {
      titulo: 'Titulo del correo 3',
      cuerpo: `Cuerpo del correo3. Cuerpo del correo3. Cuerpo del correo3. 
      Cuerpo del correo3. Cuerpo del correo3. Cuerpo del correo3. 
      Cuerpo del correo3. Cuerpo del correo3. Cuerpo del correo3. `,
      emisor: 'correoEmisor3@prueba.com',
      receptor: 'correoReceptor3@prueba.com',
      leido: true,
    };

    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
    this.correos.push(correo3);
  }

  ngOnInit(): void {
  }

}
