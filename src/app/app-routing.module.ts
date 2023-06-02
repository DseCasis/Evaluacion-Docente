import { AuthRoutingModule } from './auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: '**', component: NoPagesFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
