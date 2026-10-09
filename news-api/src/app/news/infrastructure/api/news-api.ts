import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ArticleAssembler } from './article-assembler';
import { environment } from '../../../../environments/environment.development';
import { EverythingResponse } from './everything-response';
import { map } from 'rxjs';
@Service()
export class NewsApi {

    private readonly http =  inject(HttpClient);
    private readonly assembler = inject(ArticleAssembler);
    private readonly endPoint = `${environment.newsApiBaseURL}${environment.newsApiEndPoint}`;


    getArticlesByQuery(query:string){
        this.http.get<EverythingResponse>(
         this.endPoint,
         {
           params:{
               q: query,
            sortBy:"publishedAt",
            apiKey: environment.newsApiKey
           }
         }
        ).pipe(
            map(response => this.assembler.toEntities(response.articles))
        );
    }





}
