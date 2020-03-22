import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaReportePersonalComponent } from './tabla-reporte-personal/tabla-reporte-personal.component';


const routes: Routes = [
  { path: 'tablaReportePersonal', component: TablaReportePersonalComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
