import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
 isDivVisible:boolean=true;
 isToggle:boolean=false;
 isdivCompareNumber:boolean=true;
 Number1:string='';
 Number2:string='';
 selectState:string='';
 isActive:boolean=false;

 cityArray : string []=['Mumbai','Pune','Gujrat','MP','UP'];

 studentList:any[]=[
  {studentId:22,Name:'Ramcharan',city:'Mumbai',isActive:false},
  {studentId:33,Name:'Raju',city:'Deharadun',isActive:false},
  {studentId:24,Name:'Ranju',city:'Varanshi',isActive:true},
  {studentId:39,Name:'Rani',city:'Banglor',isActive:false},
  {studentId:89,Name:'Rohani',city:'Pune',isActive:false}
] 


   divShow(){
        this.isDivVisible=true;
          }

  divHide(){
  this.isDivVisible=false;
    }
  divToggle()
  {
    this.isToggle=!this.isToggle;
  }

  divCampare(){
    if(this.Number1=this.Number2)
    {
      this.isdivCompareNumber=true;
    }
    else
    {
      this.isdivCompareNumber=false;


    }
  }



}
