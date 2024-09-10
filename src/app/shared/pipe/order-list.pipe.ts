import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  // transform(value: string, ...args: unknown[]): unknown {
  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): Array<any> {
    //'value' refiere a los datos, que podremos manipular aquí
    //'TrackModel[]' es el tipo de entrada
    // 'Array<any>' es el valor de salida, o ya transformado. Podría ser : TrackModel[]
    
    
    try {
      if(args === null){
        return value;
      } else {
        // sort by name
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          }
          if (a[args] === b[args]) {
            return 0;
          }
          if (a[args] > b[args]) {
            return 1;
          }
          return 1;
      });

      return (sort === 'asc') ? tmpList : tmpList.reverse();

    }
    } catch (error) {
      console.log("Error occured. Check it.");
      
      return value;
    }

    
    return value;
  }

}
