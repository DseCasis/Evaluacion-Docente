import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { Routes } from '@angular/router';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

const routes: Routes = [
  { path : '', component: LoginComponent},
  { path : 'login', component: LoginComponent},
  // { path : 'login', component: LoginComponent, canActivate: [AuthGuard]
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPagesFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
