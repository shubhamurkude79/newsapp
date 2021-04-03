import { Component, Input, OnInit } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-news-read',
  templateUrl: './news-read.component.html',
  styleUrls: ['./news-read.component.css']
})
export class NewsReadComponent implements OnInit {
  @Input() news: News;
  
  constructor() { }

  ngOnInit() {
  }

}
