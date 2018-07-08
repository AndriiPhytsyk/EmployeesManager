import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: Employee[];
  employee: Employee = new Employee();
  tableMode: boolean = true;
  searchText = '';
  searchField = 'name';

  constructor(private appService: AppService) { }

  changeCriteria(field: string) {

    this.searchField = field;
  }

  ngOnInit() {
    this.loadEmployees();   
  }

  loadEmployees() {
    this.appService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
      
    })
  }

  save() {
    if (this.employee.id == null) {
      this.appService.addEmployee(this.employee)
        .subscribe((data: Employee) => {
          this.employees.push(data);
          this.loadEmployees();
         
        });
    } else {
      this.appService.updateProduct(this.employee)
        .subscribe(data => this.loadEmployees());
    }
    this.cancel();
  }

  editProduct(e: Employee) {
    this.employee = e;
  }

  cancel() {
    this.employee = new Employee();
    this.tableMode = true;
  }

  delete(e: Employee) {
    this.appService.deleteProduct(e.id)
      .subscribe(data => this.loadEmployees());
  }

  add() {
    this.employee = new Employee()
    this.tableMode = false;
  }
}

