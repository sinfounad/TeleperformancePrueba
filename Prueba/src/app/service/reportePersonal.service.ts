import { Injectable, ComponentFactoryResolver } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {TablaReportePersonal} from '../dto/tablaReportePersonal';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportePersonalService {
  domain: string ="http://localhost:3002/api";
  constructor(private http: HttpClient) {}

 
 
 
  getReporte (): Observable<Array<TablaReportePersonal>> {
   console.log("1qwsss");
    let getAllTask = "/getReporte";
    return this.http.get<Array<TablaReportePersonal>>(this.domain + getAllTask);
     
  }


    
    addReporte(newTask): any {
      this.http.post<TablaReportePersonal>(this.domain + '/saveReporte', newTask).subscribe(resp =>{
        console.log("running");
        let response = resp;
        //response = resp;
        return response;
      }
        
       
        

    );
        
    }
    
    
   
}
