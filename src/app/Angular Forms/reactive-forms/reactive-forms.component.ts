import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  studentForm:FormGroup=new FormGroup({
      firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      lastName:new FormControl("",[Validators.required]),
      studeEmail:new FormControl("",[Validators.email,Validators.required]),
      studePassword:new FormControl(),
      address:new FormControl(),
      address1:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      zipCode:new FormControl(),
      isValidate:new FormControl()
  });

  formValue:any;

  save(){

        this.formValue=this.studentForm.value;

  }

}
