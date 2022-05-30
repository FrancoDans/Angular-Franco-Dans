import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: unknown, args?: string): unknown {
   let pipe = "pipe";
    
   switch(args){
     case "euro":
      pipe="Euro";
      break;
      case "dolar":
        pipe="Dolar";
        break;
   }
   return `${pipe}:${value}`
  }

}
