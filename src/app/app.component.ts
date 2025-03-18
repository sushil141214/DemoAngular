import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeNumberComponent } from './Components/add-employee-number/add-employee-number.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddEmployeeNumberComponent,EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'DemoAngular';
}
