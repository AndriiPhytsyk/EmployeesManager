import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';


@Pipe({ name: 'searchByName' })

export class SearchByNamePipe implements PipeTransform {
  transform(employees: Employee[], searchText: string, field: string) {


    return employees.filter((i) => {
      const t = Object.assign({}, i);
      if (!isNaN(t[field])) {
        t[field] += '';
      }

      return t[field].toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
            
  }
}

