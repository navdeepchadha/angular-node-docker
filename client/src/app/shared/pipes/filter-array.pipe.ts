import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  pure: false
})
export class FilterArrayPipe implements PipeTransform {
  transform(value: Array<any>, filter: any) {
    if (filter.name) {
      value = value.filter(x=> x.name === filter.name);
    }
    if (filter.race) {
      value = value.filter(x=> x.race === filter.race);
    }
    if (filter.hair) {
      value = value.filter(x=> x.hair === filter.hair);
    }
    if (filter.gender) {
      value = value.filter(x=> x.gender === filter.gender);
    }
    return value;
  }
}
