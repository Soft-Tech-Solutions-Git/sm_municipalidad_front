import { Component, Input } from '@angular/core';
import * as Glide from '@glidejs/glide';
import { Area } from 'src/app/interfaces/area.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent {
  images: Area[] = [
    {
      id: 'juventud',
      url: 'assets/images/violet.svg',
      title: 'Juventudes',
      subTitle:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laborum! Commodi mollitia ducimus, cumque porro aut optio culpa. Officia quo qui obcaecati modi doloribus corrupti.',
    },
    {
      id: 'mujeres',
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

  constructor(private dataService: DataService) {}
  areaSelected(selectedArea: Area[]) {
    this.dataService.setAreaSelected(selectedArea);
  }
  // @Input('id') areaId!: string;
}
