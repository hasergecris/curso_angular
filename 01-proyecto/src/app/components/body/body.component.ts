import {  Component } from '@angular/core';

@Component ({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere de una gran responsabilidad',
    autor: 'Christian Vega'
  };

  personajes: string[] = ['Goku', 'Vegeta', 'Gohan'];

}


