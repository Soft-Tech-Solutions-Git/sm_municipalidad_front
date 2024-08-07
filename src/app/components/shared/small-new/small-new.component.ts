import { Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import newsData from 'src/assets/newsData.json';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-small-new',
  templateUrl: './small-new.component.html',
  styleUrls: ['./small-new.component.css'],
})
export class SmallNewComponent {
  constructor(private dataService: DataService) {}

  newSelected(selectedNew: News[]) {
    this.dataService.setSelectedCard(selectedNew);
  }

  public news: News[] = newsData;
  selectNormalNew(): News[] {
    return this.news.filter(
      (newsItem) => newsItem.title != 'Obras públicas' && newsItem.title
    );
  }
  public normalNews = this.selectNormalNew();
}
