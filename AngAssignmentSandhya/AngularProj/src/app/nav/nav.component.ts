import { EmployeeService } from './../employee.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public employee$: any;
  constructor(private _service: EmployeeService){}
  ngOnInit(){
    this._service.getEmployees().subscribe(data => {
      console.log(data)
      this.employee$ = data.data; 
      });
    }

}
