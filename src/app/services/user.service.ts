import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
//modelo
import { User } from '../models/user';

@Injectable()
export class UserService{
	//cabeceras
	private headers = new Headers({'Content-Type': 'application/json'});
	//ruta
	private url = 'http://localhost:8000/api/usuarios';

	//constructor
	constructor(private http: Http){}

	//metodo para listar usuarios
	getUsuarios(): Promise<User[]>{
		return this.http.get(this.url)
			.toPromise()
			.then(response => response.json().usuarios as User[])
			.catch(this.handleError);
	}

	//método para mostrar un determinado usuario
	getUsuario(id: number): Promise<User>{
		return this.http.get(this.url+'/'+id)
			.toPromise()
			.then(res => res.json().usuario as User)
			.catch(this.handleError);
	}

	//metodo para crear usuario
	addUsuario(user: User): Promise<User>{
		return this.http
			.post(this.url, JSON.stringify(user), {headers: this.headers})
			.toPromise()
			.then(res => res.json().usuario as User)
			.catch(this.handleError);
	}

	//método para actualizar usuario
	updateUsuario(id, user: User): Promise<User>{
		return this.http
			.put(this.url+'/'+id, JSON.stringify(user), {headers: this.headers})
			.toPromise()
			.then(() => user)
			.catch(this.handleError);
	}

	//método para eliminar usuario
	deleteUsuario(id: number): Promise<void>{
		return this.http.delete(this.url+'/'+id, {headers: this.headers})
			.toPromise()		
			.then(() => null)
			.catch(this.handleError);
	}

	//metodo para manejo de errores
	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

}