import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { environment } from 'src/environments/environment';
import { SaveArticleResponseInterace } from 'src/app/shared/types/save-article-response.interface';

@Injectable({
  providedIn: "root"
})
export class EditArticleService {

  constructor(
    private http: HttpClient
  ) { }

  updateArtice(slug: string, articleData: ArticleInputInterface): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    return this.http.put<SaveArticleResponseInterace>(url, { article: articleData }).pipe(
      map(response => response.article)
    )
  }
}
