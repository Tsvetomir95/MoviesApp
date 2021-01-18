import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string = ''): any {
    let resultArray = [];
    if (value.length === 0 || filterString === '' || filterString === undefined) {
      return value;
    }
    
    for (let item of value){
      if(item.title.includes(filterString)) {
        resultArray.push(item);
        
      }  
      }
      return resultArray;
    }
    
  

}
