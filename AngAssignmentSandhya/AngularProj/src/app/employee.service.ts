import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {url} from './constants'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http: HttpClient) { }
  
  public getEmployees(): Observable<any>{
    return this.http.get<any>(url);
  }
}


