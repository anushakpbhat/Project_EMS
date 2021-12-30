import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import * as alertify from 'alertifyjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employees!:Employee[];
  /*updatePage=new FormGroup({
    first_name:new FormControl(''),
    middlename:new FormControl(''),
    last_name:new FormControl(''),
    father_name:new FormControl(''),
    mother_name:new FormControl(''),
    date:new FormControl(''),
    emp_id:new FormControl(''),
    adhar_card:new FormControl(''),
    pan_card:new FormControl(''),
    gender:new FormControl(''),
    nationality:new FormControl(''),
    mobile_number:new FormControl(''),
    address:new FormControl(''),
    email_id:new FormControl(''),
  })*/
 
  constructor(private employeeService:EmployeeService,private https:HttpClient,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data:Employee[])=>
    {
      console.log(data);
      this.employees=data;
    });

    /*console.log(this.router.snapshot.params['emp_id']);
    this.employeeService.getData(this.router.snapshot.params['emp_id']).subscribe((data:Employee[])=>{
      console.log(data);
      this.employees=data;*/

      /*this.updatePage=new FormGroup({
        first_name:new FormControl('data[first_name]'),
        middlename:new FormControl('data[lmiddlename]'),
        last_name:new FormControl('data[last_name]'),
        father_name:new FormControl('data[father_name]'),
        mother_name:new FormControl('data[mother_name]'),
        date:new FormControl('data[date]'),
        emp_id:new FormControl('data[emp_id]'),
        adhar_card:new FormControl('data[adhar_card]'),
        pan_card:new FormControl('data[pan_card]'),
        gender:new FormControl('data[gender]'),
        nationality:new FormControl('data[nationality]'),
        mobile_number:new FormControl('data[mobile_number]'),
        address:new FormControl('data[address]'),
        email_id:new FormControl('data[email]'),
      })*/
     

    
  }
    
  
onSubmit(data:Employee){
 this.https.post('http://localhost:8080/api/updateemployee/+`${data.emp_id}`',data).subscribe((result)=>{
    console.log("result",result);
    console.log(data);
  })
  alertify.alert('Success!!', ' Employee deatils updated successfully');
}

}
