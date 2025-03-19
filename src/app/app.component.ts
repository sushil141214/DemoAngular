import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

// Data type of typescript 
//string,number, boolean, Data

CureseName : string="Angular 18";
ddlDefault="Maharashtra";

isIndian: boolean=true;


txtcolor: string ="bg-primary";

constructor()
{
   this.CureseName
}

showMe(message: string){

  alert(message);
}
  
}
