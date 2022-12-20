import { Injectable } from '@angular/core';
import { CreateArticleModule } from '../create-article.module';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { Observable, map } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { environment } from 'src/environments/environment';
import { SaveArticleResponseInterace } from 'src/app/shared/types/save-article-response.interface';

@Injectable({
  providedIn: "root"
})
export class CreateArticleService {

  constructor(
    private http: HttpClient
  ) { }

  createArtice(articleData: ArticleInputInterface): Observable<ArticleInterface> {
    console.log({ article: articleData });

    const url = `${environment.apiUrl}/articles`;
    return this.http.post<SaveArticleResponseInterace>(url, { article: articleData }).pipe(
      map(response => response.article)
    )
  }
}
