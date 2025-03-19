import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectiveComponent } from './Components/structural-directive/structural-directive.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StructuralDirectiveComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {


  



constructor()
{
  
  
}


}
