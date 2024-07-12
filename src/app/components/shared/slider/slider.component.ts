import { AfterViewInit, Component } from '@angular/core';
import * as Glide from '@glidejs/glide';
import { AdaptativeService } from 'src/app/services/adaptative.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements AfterViewInit {
  images: string[] = [
    'assets/images/image1.svg',
    'assets/images/image2.svg',
    'assets/images/image3.svg',
  ];
  mobileImages: string[] = [
    'assets/images/mobile1.svg',
    'assets/images/mobile2.svg',
    'assets/images/mobile3.svg',
  ];

  public isDesktopVisible: boolean;
  public isMobileVisible: boolean;

  constructor(private AdaptativeService: AdaptativeService) {
    this.isDesktopVisible = true;
    this.isMobileVisible = true;
  }

  public desktopGlide: any;
  public mobileGlide: any;

  ngAfterViewInit(): void {
    this.desktopGlide = new Glide.default('.glide-desktop', {
      type: 'carousel',
      perView: 2,
      startAt: 0,
      focusAt: 'center',
      autoplay: 3000,
      gap: 50,
      hoverpause: false,
      breakpoints: {
        1600: {
          perView: 2,
          gap: 50,
        },
        1000: {
          perView: 1,
        },
      },
    });
    this.desktopGlide.mount();

    this.mobileGlide = new Glide.default('.glide-mobile', {
      type: 'carousel',
      perView: 1,
      startAt: 0,
      focusAt: 'center',
      autoplay: 3000,
      gap: 10,
      hoverpause: false,
    });
    this.mobileGlide.mount();

    setTimeout(() => {
      if (this.AdaptativeService.sizeDisplay === 'web') {
        this.isMobileVisible = false;
      } else if (this.AdaptativeService.sizeDisplay === 'tablet') {
        this.isDesktopVisible = false;
      }
    }, 0);
  }
}
