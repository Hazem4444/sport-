import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc'
})
export class TtcPipe implements PipeTransform {

  transform(valeur: number): any {
    let result = valeur *1.19
    return result;
  }

}
