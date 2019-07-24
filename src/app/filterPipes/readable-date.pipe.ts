import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'readableDate'
})
export class ReadableDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value)
      return value;

    return moment(value, 'YYYY-MM-DD').format('dddd, MMMM YYYY');
  }

}
