import { Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import newsData from 'src/assets/newsData.json';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
})
export class AdsComponent {
  public news: News[] = newsData;

  selectSmallNew(): News[] {
    return this.news.filter((newsItem) => !newsItem.title);
  }
  public smallNews = this.selectSmallNew();
}
