import { AfterViewInit, Component } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import { AdaptativeService } from 'src/app/services/adaptative.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements AfterViewInit {
  public news: News[] = [
    {
      title: 'DESARROLLO SOCIAL',
      description:
        'El Municipio asiste a 28 mil personas por día a través de 220 comedores y merenderos.',
      image:
        'https://images.prismic.io/sitiosale/Zmi0M5m069VX1pyY_IMG-20240601-WA0008.jpg?auto=format%2Ccompress&rect=0%2C0%2C1280%2C856&w=1600&h=1070?fit=clip&w=1400',
    },
    {
      title: 'EDUCACIÓN',
      description:
        'San Martín convoca a participar del Primer Congreso de Educación de la ciudad.',
      image:
        'https://images.prismic.io/sitiosale/Zhl9HjjCgu4jzyvj_f_banners_web_congreso-01.jpg?auto=format%2Ccompress&rect=0%2C0%2C1110%2C480&w=1600&h=692?fit=clip&w=1400',
    },
    {
      title: 'SALUD',
      description:
        'San Martín implementa la Historia Clínica Digital en toda la red pública de salud.',
      image:
        'https://images.prismic.io/sitiosale/Zmiu5pm069VX1pwl_SanMart%C3%ADnimplementalaHistoriaCl%C3%ADnicaDigitalentodalaredp%C3%BAblicadesalud.jpg?auto=format%2Ccompress&rect=0%2C1%2C7952%2C5303&w=1600&h=1067?fit=clip&w=1400',
    },
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

  selectSmallNew(): News[] {
    return this.news.filter((newsItem) => !newsItem.title);
  }
  public smallNews = this.selectSmallNew();

  selectSpecialNew(): News[] {
    return this.news.filter((newsItem) => newsItem.title === 'Obras públicas');
  }
  public specialNews = this.selectSpecialNew();

  selectNormalNew(): News[] {
    return this.news.filter(
      (newsItem) => newsItem.title != 'Obras públicas' && newsItem.title
    );
  }
  public normalNews = this.selectNormalNew();

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
