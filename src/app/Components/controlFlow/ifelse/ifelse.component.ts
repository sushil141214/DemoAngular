import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  isdivVisiable:boolean=true;
  isDivShow:boolean=false;
  num1:string='';
  num2:string='';

  selectStatus:string='';
  



  addRed(){
    this.isdivVisiable=true;

  }

  addBlue(){
    this.isdivVisiable=false;

  }
  addToggle()
  {
    this.isDivShow=!this.isDivShow;
  }


}
