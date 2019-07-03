import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `<h3>Employee List</h3>
              {{errMsg}}
             <ul *ngFor="let employee of employees; index as i">
                  <li>{{i+1}}. {{employee.name}}</li>
             </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errMsg;
  constructor(private _employeeService : EmployeeServiceService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe(data => this.employees = data,
            error => this.errMsg = error);
  }

}
