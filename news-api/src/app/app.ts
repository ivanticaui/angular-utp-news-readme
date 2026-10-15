import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './shared/presentation/components/layout/layout';
import { NewsPage } from './news/presentation/news-page/news-page';
@Component({
  imports: [
    RouterOutlet,
    Layout,
    NewsPage 
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('news-api');
}
