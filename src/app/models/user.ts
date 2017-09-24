export class User {
	constructor(
		//?: es para que sea opcional
		public id: number,
		public name: string,
		public email: string,
		public password:string,
	){}
}