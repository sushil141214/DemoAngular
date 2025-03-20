import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  // On button click change the div color 

  divcolor:string='bg-primary';
  isDivColor:boolean=false;
  num1:string='';
  num2:string='';
  isActive:boolean=false;

  studentList:any[]=[
    {studentId:22,Name:'Ramcharan',Gender:'Male',TotalMarks:'20',city:'Mumbai',isActive:false},
    {studentId:22,Name:'kiran', Gender:'Female',TotalMarks:'95',city:'Mumbai',isActive:false},
    {studentId:22,Name:'komal', Gender:'Female',TotalMarks:'52',city:'Mumbai', isActive:false},
    {studentId:33,Name:'Raju',  Gender:'Female',TotalMarks:'65',city:'Deharadun', isActive:false},
    {studentId:24,Name:'Ranju', Gender:'Female',TotalMarks:'50',city:'Varanshi', isActive:true},
    {studentId:39,Name:'Rani',  Gender:'Female',TotalMarks:'32',city:'Banglor',isActive:false},
    {studentId:89,Name:'Rohani', Gender:'Female',TotalMarks:'65', city:'Pune', isActive:false}
  ] 


    addRed(){
      this.divcolor='bg-danger';

    }

    addBlue()
    {
      this.divcolor='bg-success';

    }
        // Boolean value compare this condition work vice versa 
    addToggle()
    {
      this.isDivColor=!this.isDivColor;
    }




}
