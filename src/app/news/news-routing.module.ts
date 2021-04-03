import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsReadComponent } from './news-read/news-read.component';
import { NewsRecentComponent } from './news-recent/news-recent.component';


const routes: Routes = [
  { path: 'news', component: NewsRecentComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'news/:id', component: NewsReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
