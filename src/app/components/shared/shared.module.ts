import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider/slider.component';
import { StoriesComponent } from './stories/stories.component';
import { SmallNewComponent } from './small-new/small-new.component';
import { AllNewsComponent } from '../../pages/all-news/all-news.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { BigNewComponent } from './big-new/big-new.component';
import { SmallNewMobileComponent } from './small-new-mobile/small-new-mobile.component';
import { NewDetailsComponent } from './new-details/new-details.component';

@NgModule({
  declarations: [
    SliderComponent,
    StoriesComponent,
    SmallNewComponent,
    AllNewsComponent,
    AdsComponent,
    BigNewComponent,
    SmallNewMobileComponent,
    NewDetailsComponent,
  ],
  imports: [CommonModule, LayoutModule, RouterModule],
  exports: [
    SliderComponent,
    StoriesComponent,
    SmallNewComponent,
    AllNewsComponent,
    AdsComponent,
    BigNewComponent,
    SmallNewMobileComponent,
    NewDetailsComponent,
  ],
})
export class SharedModule {}
