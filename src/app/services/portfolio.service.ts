import {Injectable} from '@angular/core';
import {Portfolio} from '../models/portfolio.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

interface GetResponsePortfolio {
  _embedded: {
    portfolios: Portfolio[];
  }
}

@Injectable()
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  getProtofolios() {
    return this.http.get<GetResponsePortfolio>(environment.apiEndPoint.portfolio)
      .pipe(map(response => response._embedded.portfolios));
  }

}
