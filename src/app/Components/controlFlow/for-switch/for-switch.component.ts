import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
  dayNumber:string='';

  cityArray : string []=['Mumbai','Pune','Gujrat','MP','UP'];

  studentList:any[]=[
   {studentId:22,Name:'Ramcharan',city:'Mumbai',isActive:false},
   {studentId:33,Name:'Raju',city:'Deharadun',isActive:false},
   {studentId:24,Name:'Ranju',city:'Varanshi',isActive:true},
   {studentId:39,Name:'Rani',city:'Banglor',isActive:false},
   {studentId:89,Name:'Rohani',city:'Pune',isActive:false}
 ] 

}
