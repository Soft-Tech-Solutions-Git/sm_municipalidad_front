import { Component } from '@angular/core';

interface Cards {
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  public cards: Cards[] = [
    {
      title: 'DESARROLLO SOCIAL',
      desc: 'El Municipio asiste a 28 mil personas por día a través de 220 comedores y merenderos.',
      img: 'https://images.prismic.io/sitiosale/Zmi0M5m069VX1pyY_IMG-20240601-WA0008.jpg?auto=format%2Ccompress&rect=0%2C0%2C1280%2C856&w=1600&h=1070?fit=clip&w=1400',
    },
    {
      title: 'EDUCACIÓN',
      desc: 'San Martín convoca a participar del Primer Congreso de Educación de la ciudad.',
      img: 'https://images.prismic.io/sitiosale/Zhl9HjjCgu4jzyvj_f_banners_web_congreso-01.jpg?auto=format%2Ccompress&rect=0%2C0%2C1110%2C480&w=1600&h=692?fit=clip&w=1400',
    },
    {
      title: 'SALUD',
      desc: 'San Martín implementa la Historia Clínica Digital en toda la red pública de salud.',
      img: 'https://images.prismic.io/sitiosale/Zmiu5pm069VX1pwl_SanMart%C3%ADnimplementalaHistoriaCl%C3%ADnicaDigitalentodalaredp%C3%BAblicadesalud.jpg?auto=format%2Ccompress&rect=0%2C1%2C7952%2C5303&w=1600&h=1067?fit=clip&w=1400',
    },
  ];
}
