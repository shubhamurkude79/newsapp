import { Component, Input, OnInit } from '@angular/core';

import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onSelected() {
    this.newsService.newsSelected.emit(this.news);
  }

}
