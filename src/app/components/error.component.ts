import { Component } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: '../views/error.component.html',
  styleUrls: ['../styles/error.component.css']
})

export class ErrorComponent {
  public texto: string;
  
  //constructor
  constructor(){
  	this.texto = 'Ups, hubo un error Dx';
  }
}
