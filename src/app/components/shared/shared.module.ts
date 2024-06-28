import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { StoriesComponent } from './stories/stories.component';
import { NewsComponent } from './news/news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    SliderComponent,
    StoriesComponent,
    NewsComponent,
    NavBarComponent,
  ],
  imports: [CommonModule],
  exports: [SliderComponent, StoriesComponent, NewsComponent, NavBarComponent],
})
export class SharedModule {}
