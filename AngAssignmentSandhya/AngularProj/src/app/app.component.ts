import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngAssignmentSandhya';
  public employee$: any;
  constructor(private _service: EmployeeService){}
  ngOnInit(){    
    }
  }

