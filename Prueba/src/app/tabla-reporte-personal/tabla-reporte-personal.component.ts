import { Component, OnInit } from '@angular/core';
import {TablaReportePersonal} from '../dto/TablaReportePersonal';
import {  ReportePersonalService } from '../service/reportePersonal.service';

@Component({
  selector: 'app-tabla-reporte-personal',
  templateUrl: './tabla-reporte-personal.component.html',
  styleUrls: ['./tabla-reporte-personal.component.css']
})
export class TablaReportePersonalComponent implements OnInit {
  reporte: Array<ReportePersonalService>;
  document: string;


  public tablaReportePersonal =  new Array<TablaReportePersonal>();
  public reportePersonal= new TablaReportePersonal;
  
  constructor(private reportePersonalService: ReportePersonalService) { }

  ngOnInit() {
    this.reportePersonalService.getReporte();
    console.log("ingreso");
    this.getTask();
  }
  getTask(): void {
    
    this.reportePersonalService.getReporte().subscribe(resp =>{
    console.log(resp);
    resp.forEach(r=> this.tablaReportePersonal.push(r));
    console.log('task list');
    console.log(this.reporte);
  });

}

addReporte(event){
  event.preventDefault(); 
  

  const  NewReporte : TablaReportePersonal ={
  
     Documento: 333,
     Nombres_Apellidos:this.reportePersonal.Nombres_Apellidos,
     Fecha_inicio :this.reportePersonal.Fecha_inicio,
     Fecha_fin: this.reportePersonal.Fecha_fin,
     Horario_inicioT:this.reportePersonal.Horario_inicioT,

     Horario_finT:this.reportePersonal.Fecha_fin,
     Horario_Inicio_HoraExtra:this.reportePersonal.Horario_Inicio_HoraExtra,
    
     Horario_finHoraExtra:this.reportePersonal.Horario_finHoraExtra,
     Motivo_HoraExtra:this.reportePersonal.Motivo_HoraExtra,
    


  };
  this.reportePersonalService.addReporte(NewReporte)
   Reporte =>{this.reporte.push()};
   console.log(this.reporte);
   console.log("addOK");
  
  
}
}
