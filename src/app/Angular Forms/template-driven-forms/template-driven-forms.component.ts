import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [JsonPipe,FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {

  studentDetails:any={
    fName:'',
    lName:'',
    sMail:'',
    sPassword:'',
    sAdd:'',
    sAdd1:'',
    sCity:'',
    sState:'',
    sZipCode:'',
    isValidate:false}

    formValue:any; 
    
    Save(){
      debugger;
      this.formValue=this.studentDetails; 

    }
    Reset(){
      this.formValue={
        fName:'',
        lName:'',
        sMail:'',
        sPassword:'',
        sAdd:'',
        sAdd1:'',
        sCity:'',
        sState:'',
        sZipCode:'',
        isValidate:false
    }
    }

}
