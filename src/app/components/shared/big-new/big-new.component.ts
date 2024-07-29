import { Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import newsData from 'src/assets/newsData.json';

@Component({
  selector: 'app-big-new',
  templateUrl: './big-new.component.html',
  styleUrls: ['./big-new.component.css'],
})
export class BigNewComponent {
  public news: News[] = newsData;

  selectSpecialNew(): News[] {
    return this.news.filter((newsItem) => newsItem.title === 'Obras públicas');
  }
  public specialNews = this.selectSpecialNew();
}
