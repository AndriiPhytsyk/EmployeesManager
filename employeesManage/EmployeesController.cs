using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using employeesManage.models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace employeesManage
{
  [Route("api/employees")]
  public class EmployeesController : Controller
  {
    ApplicationContext db;
    public EmployeesController(ApplicationContext context)
    {
      db = context;    
    }

    [HttpGet]
    public IEnumerable<Employee> Get()
    {
      return db.Employees.ToList();
    }

    [HttpGet("{id}")]
    public Employee Get(int id)
    {
      Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
      return employee;
    }

    [HttpPost]
    public IActionResult Post([FromBody]Employee employee)
    {
      if (ModelState.IsValid)
      {
        db.Employees.Add(employee);
        db.SaveChanges();
        return Ok(employee);
      }
      return BadRequest(ModelState);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]Employee employee)
    {
      if (ModelState.IsValid)
      {
        db.Update(employee);
        db.SaveChanges();
        return Ok(employee);
      }
      return BadRequest(ModelState);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
      if (employee != null)
      {
        db.Employees.Remove(employee);
        db.SaveChanges();
      }
      return Ok(employee);
    }
  }
}

