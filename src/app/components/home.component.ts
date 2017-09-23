import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.component.html',
  styleUrls: ['../styles/home.component.css']
})
export class HomeComponent {
  public titulo: string;
  
  //constructor
  constructor(){
  	this.titulo = 'Webapp de productos con Angular4';
  }
}
