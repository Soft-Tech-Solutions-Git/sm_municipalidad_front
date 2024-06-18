import { AfterViewInit, Component } from '@angular/core';
import * as Glide from '@glidejs/glide';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements AfterViewInit {
  stories: string[] = [
    'assets/images/imageStories2.jpeg',
    'assets/images/imageStories1.jpeg',
    'assets/images/imageStories3.jpeg',
    'assets/images/imageStories4.jpeg',
    'assets/images/imageStories5.jpeg',
    'assets/images/imageStories6.jpeg',
    'assets/images/imageStories7.jpeg',
    'assets/images/imageStories8.jpeg',
    'assets/images/imageStories9.jpeg',
    'assets/images/imageStories10.jpeg',
  ];

  public storiesGlide: any;

  ngAfterViewInit(): void {
    this.storiesGlide = new Glide.default('.glide2', {
      // Configura las opciones de Glide aquí
      type: 'carousel',
      perView: 6,
      focusAt: 'center',
      autoplay: 2000,
      gap: 5,
      hoverpause: false,
      breakpoints: {
        1000: {
          perView: 5,
        },
        600: {
          perView: 4,
        },
        400: {
          perView: 2,
        },
      },
    });
    this.storiesGlide.mount(); // Inicializa Glide
  }
}
