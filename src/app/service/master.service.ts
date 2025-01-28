import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  production:true | undefined
  apiEndPoint: string = "ec2-3-111-147-176.ap-south-1.compute.amazonaws.com/api/HospitalAppointment/";
  constructor(private http: HttpClient) { }

  createNew(obj:any): Observable<any> {
    return this.http.post(this.apiEndPoint + "AddNewAppointment", obj)
  }

  getAppointments(): Observable<any>{
    return this.http.get<Observable<any>>(this.apiEndPoint + "getAppointments")
  }
  
}
