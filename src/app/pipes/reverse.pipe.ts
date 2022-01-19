import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: any): any {
   let res:any="";
for (let i = 0; i < ch.length; i++) {
 res = ch[i]+res 
}
    return res;
  }

}
