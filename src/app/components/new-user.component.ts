import { Component } from '@angular/core';
import { Router } from '@angular/router';
//servicio
import { UserService } from '../services/user.service'
//modelo
import { User } from '../models/user';

@Component({
  selector: 'user-new',
  templateUrl: '../views/new-user.component.html',
  styleUrls: ['../styles/new-user.component.css'],
  providers: [
    UserService
  ]
})
export class NewUserComponent {
  public texto = 'Crea un nuevo usuario!';
  public user = new User('', '', '');
  
  //constructor
  constructor(
  	private userService: UserService,
  	//para ir a otra vista despues de agregar
  	private router: Router
  ){}

  onSubmit(){
  	this.userService.addUsuario(this.user)
  		.then(() => this.router.navigate(['/usuarios']));
  }
}
