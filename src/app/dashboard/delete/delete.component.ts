import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  employees!:Employee[];
  
  constructor(private employeeService:EmployeeService,private https:HttpClient) { }

  ngOnInit(): void {
    /*this.employeeService.getEmployees().subscribe((data:Employee[])=>
    {
      console.log(data);
      this.employees=data;
    });*/
  }
onSubmit(data:Employee){
  this.https.post('http://localhost:8080/api/deleteemployee/'+`${data.emp_id}`,data).subscribe((result)=>{
    console.log("result",result);
    console.log(data);
  })
  alertify.alert('Success!!', 'Employee deatils removed successfully ');
}
}


