import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sm_municipalidad_front';

  navItems = [
    { text: 'Home', icon: 'assets/images/home.svg', link: '/home' },
    { text: 'News', icon: 'assets/images/news.svg', link: '#news-section' },
  ];

  socialLinks = [
    {
      icon: 'assets/images/whatsapp.svg',
      link: 'https://wa.me/+5492645748636',
    },
  ];
}
