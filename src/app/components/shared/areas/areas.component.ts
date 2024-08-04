import { Component } from '@angular/core';
import * as Glide from '@glidejs/glide';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent {
  images: { url: string; title: string; subTitle: string }[] = [
    {
      url: 'assets/images/violet.svg',
      title: 'Juventudes',
      subTitle:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laborum! Commodi mollitia ducimus, cumque porro aut optio culpa. Officia quo qui obcaecati modi doloribus corrupti.',
    },
    {
      url: 'assets/images/blue.svg',
      title: 'Mujeres',
      subTitle:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laborum! Commodi mollitia ducimus, cumque porro aut optio culpa. Officia quo qui obcaecati modi doloribus corrupti.',
    },
  ];

  public areasGlide: any;
  ngAfterViewInit(): void {
    this.areasGlide = new Glide.default('.glide3', {
      type: 'carousel',
      perView: 1,
      startAt: 1,
      focusAt: 'center',
      autoplay: 4000,
      gap: 25,
      hoverpause: false,
      breakpoints: {
        1000: {
          perView: 1,
        },
      },
    });
    this.areasGlide.mount();
  }
}
