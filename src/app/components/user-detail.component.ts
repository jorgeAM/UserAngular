import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
//servicio
import { UserService } from '../services/user.service'
//modelo
import { User } from '../models/user';

@Component({
  selector: 'users-list',
  templateUrl: '../views/user-detail.component.html',
  styleUrls: ['../styles/user-detail.component.css'],
  providers: [
    UserService
  ]
})
export class UsersDetailComponent implements OnInit{
  public titulo = 'Lista de Usuarios!!';
  public user: User;
  
  //constructor
  constructor(
  	private userService: UserService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{    
  	this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUsuario(+params.get('id')))
      .subscribe(user => this.user = user);
  }

}
