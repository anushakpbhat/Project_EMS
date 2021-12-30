import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl="http://localhost:8080/api/getallemployee";
  
  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

 /* private baseUrl1="http://localhost:8080/api/findemployee";
  
 
  getData(emp_id:string):Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${this.baseUrl}/${emp_id}`);
  }*/
}

