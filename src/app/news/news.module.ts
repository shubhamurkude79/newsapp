import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsFeaturedComponent } from './news-featured/news-featured.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsRecentComponent } from './news-recent/news-recent.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsReadComponent } from './news-read/news-read.component';


@NgModule({
  declarations: [
    NewsFeaturedComponent, 
    NewsListComponent, 
    NewsDetailComponent, 
    NewsRecentComponent,
    NewsItemComponent,
    NewsReadComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports: [
    NewsFeaturedComponent
  ]
})
export class NewsModule { }
