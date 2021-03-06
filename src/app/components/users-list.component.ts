 import { Component, OnInit } from '@angular/core';
//servicio
import { UserService } from '../services/user.service'
//modelo
import { User } from '../models/user';

@Component({
  selector: 'users-list',
  templateUrl: '../views/users-list.component.html',
  styleUrls: ['../styles/users-list.component.css'],
  providers: [
    UserService
  ]
})
export class UsersListComponent implements OnInit{
  public titulo = 'Detalle de Usuario';
  public users: User[];
  
  //constructor
  constructor(
  	private userService: UserService
  ){}

  getUsuarios(){
  	this.userService
  		.getUsuarios()
  		.then(users => this.users = users);
  }

  ngOnInit(): void{
  	this.getUsuarios();
  }

  deleteUsuario(id){
    let confirmation = confirm('Estas seguro?')
    if(confirmation){
      this.userService
        .deleteUsuario(id)
        .then(() => this.getUsuarios());
    }   
  }

}
