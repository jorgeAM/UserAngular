import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//servicio
import { UserService } from '../services/user.service'
//modelo
import { User } from '../models/user';

@Component({
  selector: 'users-list',
  templateUrl: '../views/user-edit.component.html',
  styleUrls: ['../styles/user-edit.component.css'],
  providers: [
    UserService
  ]
})
export class UserEditComponent implements OnInit{
  public titulo = 'Editar Usuario!!';
  public user = new User(0, '', '', '');
  
  //constructor
  constructor(
  	private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  getUsuario(){
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUsuario(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  ngOnInit(): void{
    this.getUsuario();
  }

  update(): void{
    this.userService.updateUsuario(this.user.id, this.user)
      .then(() => this.router.navigate(['/usuario', this.user.id]));
  }

}
