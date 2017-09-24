import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { HomeComponent }   from './components/home.component';
import { UsersListComponent }   from './components/users-list.component';
import { NewUserComponent }   from './components/new-user.component';
import { UsersDetailComponent }   from './components/user-detail.component';
import { UserEditComponent }   from './components/user-edit.component';
import { ErrorComponent }   from './components/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'usuarios',  component: UsersListComponent },
  { path: 'usuario/new',  component: NewUserComponent },
  { path: 'usuario/:id', component: UsersDetailComponent},
  { path: 'editarUsuario/:id', component: UserEditComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}