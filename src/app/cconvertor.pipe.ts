import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cconvertor'
})
export class CconvertorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return (value * 70) + " USD";
  }

}
