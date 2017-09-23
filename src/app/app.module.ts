import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { UsersListComponent }   from './components/users-list.component';
import { NewUserComponent }   from './components/new-user.component';
import { ErrorComponent } from './components/error.component';
//servicio
import { UserService } from './services/user.service'
//routing
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersListComponent,
    NewUserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
