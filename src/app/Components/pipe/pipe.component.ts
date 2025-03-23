import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval, Observable,map } from 'rxjs';
import { CustomePipePipe } from '../../Pipe/custome-pipe.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CustomePipePipe,AsyncPipe,JsonPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  userName:string='Nilesh';
  studentMarks:string=''
  userDescription:string='I am using first time pipe in angular';
  
  Current:Date =new Date();

  student:any={name:'Radhika',empid:'101',city:'Pune',Gender:''};

  currentTime:Observable<Date>=new Observable<Date>

  constructor(){
    this.currentTime= interval(1000).pipe(map(()=>new Date()));
  }

}

