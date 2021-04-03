import { EventEmitter, Injectable } from '@angular/core';

import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsSelected = new EventEmitter<News>();
  
  private news: News[] = [
    new News('Seeking Alpha', 'Micron has an impressive technology and a strong roadmap where it will be able to continue holding its market share.', 'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1150565925/medium_image_1150565925.jpg', 1, "Dave Vellante with David Floyer", "2021-04-03T12:32:43Z"),
    new News('Wall Street Breakfast: What Moved Markets', 'Listen on the go! A daily podcast of Wall Street Breakfast Alpha Talks will be available this morning on Seeking Alpha, iTunes, Stitcher and Spotify.', 'https://static.seekingalpha.com/uploads/2018/11/21/podcast_series_header.png', 2, 'Elizabeth Blackstock', "2021-04-03T12:32:43Z"),
    new News('Google Stock, Facebook Lead 5 Tech Giants Flashing Buy Signals - Investors Business Daily', 'The market rally strengthened last week, as chip stocks and other tech giants moved into buy areas, including Google.', 'https://www.investors.com/wp-content/uploads/2017/04/google-climbingwall-ec.jpg', 3, "Editorial Staff", "2021-04-03T12:32:43Z"),
    new News('Tesla is on a collision', 'Tesla is on a collision course with Germanys biggest union and neither side is likely to back down', 'https://i.insider.com/60663984902281001950ab0d?width=1200&format=jpeg', 4, "Henry Khederian", "2021-04-03T12:32:43Z"),
    new News('Elon Musk slammed Warren Buffetts Texas power plan as crazy', 'Tesla Megapacks would be cheaper, more reliable, and work better than Buffetts emergency power plants, Musk said.', 'http://cdn.24.co.za/files/Cms/General/d/11012/51df35fb17c34a35a844eae132234c49.jpg', 5, "Khen Elazar", "2021-04-03T12:32:43Z"),
    new News('FINAL DEADLINE APPROACHING', 'The Schall Law Firm Announces the Filing of a Class Action Lawsuit Against Workhorse Group Inc. and Encourages Investors with Losses in Excess of $500,000 to Contact the Firm', 'https://s.yimg.com/uu/api/res/1.2/t4y3SZ.sI.R7VsGMz3nATA--~B/aD02ODt3PTI5MjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/accesswire.ca/f3ad0134ac2b059c9fd19724e14706c9', 6, "Stephen Johnson", "2021-04-03T12:32:43Z")
  ];

  getNews() {
    return this.news.slice();
  }

  // getProducts() {
	// 	this.products = this.db.list('products');
	// 	return this.products;
	// }

	// createProduct(data: Product) {
	// 	this.products.push(data);
	// }

	// getProductById(key: string) {
	// 	this.product = this.db.object('products/' + key);
	// 	return this.product;
	// }

	// updateProduct(data: Product) {
	// 	this.products.update(data.$key, data);
	// }

	// deleteProduct(key: string) {
	// 	this.products.remove(key);
	// }
}
