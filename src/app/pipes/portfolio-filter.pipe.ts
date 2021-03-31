import {Pipe, PipeTransform} from '@angular/core';
import {Portfolio} from '../models/portfolio.model';

@Pipe({
  name: 'filterPortfolio'
})
export class PortfolioFilterPipe implements PipeTransform {

  transform(value: Portfolio[], filterBy: string): any {
    if (filterBy === undefined || filterBy.toLowerCase() === 'all') {
      return value;
    }
    return value.filter(
      category => {
        for (let c of category.categories) {
          if (c === filterBy) {
            return category;
          }
        }
      }
    );
  }

}
