import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(ch: any): any {
    let result:any="";
    for (let i = 0; i < ch.length; i++) {
     if (ch[i]==" ") {
       result=result+"-"
     } else {
       result=result+ch[i]
     }
      
    }
    return result;
  }

}
