using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace employeesManage.models
{
  public class Employee
  {
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }     
    public int Age { get; set; }

    [DisplayFormat(DataFormatString = "{0:yyyy/MM/dd}", ApplyFormatInEditMode = true)]
    public DateTime StartDate { get; set; } 
  }
}
