import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Glide from '@glidejs/glide'; //importacion normal sugerida da error por ser legacyVersion

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
      focusAt: 'center',
      autoplay: 3000,
      gap: 5,
      hoverpause: false,
      breakpoints: {
        1000: {
          perView: 1,
        },
      },
    });
    this.glide.mount(); // Inicializa Glide
  }
}
