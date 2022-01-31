import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from  '../employee'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  employeeService: any;

  constructor(private EmployeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.EmployeeService.getEmployeesList().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  window: any['updateEmployee'] = UpdateEmployee updateEmployee(id:number){
    console.log(id);

  }
}
