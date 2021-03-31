import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {Portfolio} from '../../models/portfolio.model';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];
  isLoading: boolean = true;
  categories: string[] = ['All'];
  category: string;

  constructor(private protofolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.protofolioService.getProtofolios().subscribe(
      portofolio => {
        this.portfolios = portofolio;
        this.getLoadCategories(portofolio);
        this.isLoading = false;
      }
    );
  }

  private getLoadCategories(portofolio: Portfolio[]) {
    for (let p of portofolio) {
      for (let c of p.categories) {
        if (this.categories.indexOf(c) === -1) {
          this.categories.push(c);
        }
      }
    }
    this.categories.sort();
  }

  assignCategoryfilter(category: string) {
    this.category = category;
  }

  private openUrl(url: string) {
    location.assign(url);
  }

}
