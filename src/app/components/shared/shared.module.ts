import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { StoriesComponent } from './stories/stories.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [SliderComponent, StoriesComponent, NewsComponent],
  imports: [CommonModule],
  exports: [SliderComponent, StoriesComponent, NewsComponent],
})
export class SharedModule {}
