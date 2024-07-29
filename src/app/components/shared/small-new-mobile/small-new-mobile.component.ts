import { Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import { DataService } from 'src/app/services/data.service';
import newsData from 'src/assets/newsData.json';

@Component({
  selector: 'app-small-new-mobile',
  templateUrl: './small-new-mobile.component.html',
  styleUrls: ['./small-new-mobile.component.css'],
})
export class SmallNewMobileComponent {
  constructor(private dataService: DataService) {}

  newSelected(selectedNew: News[]) {
    this.dataService.setSelectedCard(selectedNew);
  }

  public news: News[] = newsData;
  selectNormalNew(): News[] {
    return this.news.filter((newsItem) => newsItem.title);
  }
  public normalNews = this.selectNormalNew();
}
