import { Component, OnInit } from '@angular/core';

import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-recent',
  templateUrl: './news-recent.component.html',
  styleUrls: ['./news-recent.component.css']
})
export class NewsRecentComponent implements OnInit {

  selectedNews: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.newsSelected
      .subscribe(
        (news: News) => {
          this.selectedNews = news;

      });
  }

}
