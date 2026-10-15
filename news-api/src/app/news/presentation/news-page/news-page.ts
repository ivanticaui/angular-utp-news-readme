import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsStore } from '../../application/news.store';

@Component({
  imports: [],
  selector: 'app-news-page',
  styleUrl: './news-page.css',
  templateUrl: './news-page.html',
})
export class NewsPage implements OnInit{

  protected readonly store = inject(NewsStore);
  protected readonly query = signal("tesla");
  
  ngOnInit(): void {
    this.search();
  }
  search():void{

    const query = this.query().trim();
    if(query){
      this.store.searchArticle(query);
    }

  }

}
