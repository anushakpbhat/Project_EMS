import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employees!:Employee[];
  
  constructor(private employeeService:EmployeeService,private https:HttpClient,private router:Router) { }

  ngOnInit(): void {
   this.employeeService.getEmployees().subscribe((data:Employee[])=>
    {
      console.log(data);
      this.employees=data;
    });
  }
/*onSubmit(data:Employee){
  this.https.post('http://localhost:8080/api/findemployee/(`${Emp_Id}`',data).subscribe((result)=>{
    console.log("result",result);
    console.log(data);
  });
}*/
}