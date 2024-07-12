import { Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-small-new',
  templateUrl: './small-new.component.html',
  styleUrls: ['./small-new.component.css'],
})
export class SmallNewComponent {
  public smallNews: News[] = [
    {
      title: 'Obras públicas',
      description:
        'Fernando Moreira y Martín Sabbatella recorrieron obras cloacales que beneficiarán a más de 30 mil personas',
      image: 'assets/images/news1.jpg',
    },
    {
      image: 'assets/images/donadores.jpg',
    },
  ];
}
