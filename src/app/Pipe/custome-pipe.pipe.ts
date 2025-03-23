import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe',
  standalone: true
})
export class CustomePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if(value!==null||value!==undefined||value!==""||value!=='')
      {
        return value;
      }else{
    
        return 'NA';
      }
  }
  

}
