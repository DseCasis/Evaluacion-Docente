import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocentesComponent } from './docentes/docentes.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DocentesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
