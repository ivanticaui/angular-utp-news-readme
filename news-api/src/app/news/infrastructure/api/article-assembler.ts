import { resource, Service } from '@angular/core';
import { Article } from '../../domain/model/article.entity';
import { ArticleResource } from './everything-response';

@Service()
export class ArticleAssembler {

    toEntity(resource:ArticleResource):Article{    
        return new Article(
          resource.source?.name ?? '',
          resource.author ?? '',
          resource.title ?? '',
          resource.description ?? '',
          resource.url ?? '',
          resource.urlToImage ?? '',
          resource.publishedAt ?? ''
        );
    }
    toEntities(resources:ArticleResource[]):Article[]{
    return resources.map(resource => this.toEntity(resource));
    }

}
