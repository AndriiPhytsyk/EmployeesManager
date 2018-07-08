import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./models/employee.model";

@Injectable()

export class AppService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = '/api/employees';

  getAllEmployees(): Observable<any> {
    
    return this.httpClient.get(this.apiUrl)
  }

  addEmployee(employee: Employee) {
    return this.httpClient.post(this.apiUrl, employee);
  }

  updateProduct(employee: Employee) {

    return this.httpClient.put(this.apiUrl + '/' + employee.id, employee);
  }
  deleteProduct(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
