import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { E404Component } from './e404/e404.component';
import {AuthGard} from './services/auth-gard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';

// routing
const appRoutes: Routes = [
  // pass appareils ===>charger AppareilViewComponent

  { path : 'appareils', canActivate: [AuthGard], component: AppareilViewComponent},
  { path : 'appareils/:id', canActivate : [AuthGard], component: SingleAppareilComponent},
  { path : 'edit', canActivate : [AuthGard], component: EditAppareilComponent},
  { path : 'auth', component: AuthComponent},
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path : '', component: AppareilViewComponent},
  { path : 'not-found', component: E404Component},
  { path : '**', redirectTo: '/not-found'}
]
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    E404Component,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService, AuthGard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
