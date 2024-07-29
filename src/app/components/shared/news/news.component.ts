import { AfterViewInit, Component } from '@angular/core';
import { AdaptativeService } from 'src/app/services/adaptative.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements AfterViewInit {
  public isDesktopVisible: boolean;
  public isMobileVisible: boolean;

  constructor(private AdaptativeService: AdaptativeService) {
    this.isDesktopVisible = true;
    this.isMobileVisible = true;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.AdaptativeService.sizeDisplay === 'web') {
        this.isMobileVisible = false;
      } else if (this.AdaptativeService.sizeDisplay === 'tablet') {
        this.isDesktopVisible = false;
      }
    }, 0);
  }
}
