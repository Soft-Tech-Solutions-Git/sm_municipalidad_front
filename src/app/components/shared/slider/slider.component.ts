import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Glide from '@glidejs/glide'; //importacion normal sugerida da error por ser legacyVersion
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

  public glide: any;

  ngAfterViewInit(): void {
    this.glide = new Glide.default('.glide', {
      // Configura las opciones de Glide aquí
      type: 'carousel',
      perView: 2,
      startAt: 1,
      focusAt: 'center',
      autoplay: 3000,
      gap: 250,
      hoverpause: false,
      breakpoints: {
        1600: {
          perView: 2,
          gap: 200,
        },
        1000: {
          perView: 1,
        },
      },
    });
    this.glide.mount(); // Inicializa Glide
  }

  public posicion: string;

  constructor(private AdaptativeService: AdaptativeService) {
    this.posicion = 'center';
  }

  ngOnInit(): void {
    if (this.AdaptativeService.sizeDisplay === 'web') {
      console.log('Desktop');

      // this.glide = new Glide.default('.glide', {
      //   perView: 2,
      //   gap: 250,
      // });
    }
    if (this.AdaptativeService.sizeDisplay === 'tablet') {
      console.log('Tablet');

      // this.glide = new Glide.default('.glide', {
      //   perView: 2,
      //   gap: 200,
      // });
    }
    if (this.AdaptativeService.sizeDisplay === 'phone') {
      console.log('Phone');

      // this.glide = new Glide.default('.glide', {
      //   perView: 1,
      // });
    }
  }
}
