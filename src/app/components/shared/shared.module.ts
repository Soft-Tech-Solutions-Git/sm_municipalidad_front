import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [SliderComponent, StoriesComponent],
  imports: [CommonModule],
  exports: [SliderComponent, StoriesComponent],
})
export class SharedModule {}
