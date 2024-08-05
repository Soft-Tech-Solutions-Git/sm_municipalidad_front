import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllNewsComponent } from './pages/all-news/all-news.component';
import { NewDetailsComponent } from './components/shared/new-details/new-details.component';
import { AreasFullComponent } from './pages/areas-full/areas-full.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'allnews',
    component: AllNewsComponent,
  },
  {
    path: 'newdetails',
    component: NewDetailsComponent,
  },
  {
    path: 'areasareasFull',
    component: AreasFullComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
