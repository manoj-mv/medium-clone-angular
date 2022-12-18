import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { GetArticleResponseInterface } from '../types/get-article-response.interface';
import { ArticleInterface } from '../types/article.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticle(slug: string): Observable<ArticleInterface> {
    const url = environment.apiUrl + `/articles/${slug}`;
    return this.http.get<GetArticleResponseInterface>(url).pipe(
      map(response => {
        return response.article;
      })
    )
  }
}
