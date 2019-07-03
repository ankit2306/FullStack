import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  template: `<h3>Employee Details</h3>
            <ul *ngFor="let employee of employees">
              <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
             </ul>`,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public errMsg;
  constructor(private _employeeService : EmployeeServiceService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe(data => this.employees = data,
            error => this.errMsg = error);
  }

}
