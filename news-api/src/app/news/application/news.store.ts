import { computed, inject, Service, signal } from '@angular/core';
import { NewsApi } from '../infrastructure/api/news-api';
import { Article } from '../domain/model/article.entity';
import { finalize } from 'rxjs';

@Service()
export class NewsStore {

    private readonly newsApi = inject(NewsApi);
    private readonly articleState = signal<Article[]>([]);
    private readonly loadingState = signal<boolean>(false);
    private readonly errorState = signal<string>("");

    readonly articles = computed(() => this.articleState());
    readonly loading = computed(() => this.loadingState());
    readonly error = computed(() => this.errorState());

    searchArticle(query: string): void {
    this.loadingState.set(true);
    this.errorState.set('');

    this.newsApi.getArticlesByQuery(query)
        .pipe(
            finalize(() => this.loadingState.set(false))
        )
        .subscribe({
            next: (articles) => {
                this.articleState.set(articles);
            },
            error: (error) => {
                this.errorState.set(error.message);
            }
        });
}


}
