import { Component, OnInit } from '@angular/core';

import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-featured',
  templateUrl: './news-featured.component.html',
  styleUrls: ['./news-featured.component.css']
})
export class NewsFeaturedComponent implements OnInit {
  
  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

}
