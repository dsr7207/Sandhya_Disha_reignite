import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public employee$: any;
  constructor(private _service: EmployeeService){}
  ngOnInit(){
    this._service.getEmployees().subscribe(data => {
      console.log(data)
      this.employee$ = data.data; 
      });
    }

}
