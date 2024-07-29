import { Component } from '@angular/core';
import { AdaptativeService } from 'src/app/services/adaptative.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
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
