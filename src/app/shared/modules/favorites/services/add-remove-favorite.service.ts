import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { environment } from "src/environments/environment";
import { AddToFavoriteResponseInterface } from "../types/add-favotite-response.interface";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class AddRemoveFavoriteService {
  constructor(
    private http: HttpClient
  ) { }

  getArticle(response: AddToFavoriteResponseInterface) {
    return response.article;
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}/favorite`;
    return this.http.post<AddToFavoriteResponseInterface>(url, {})
      .pipe(
        map(this.getArticle)
      );
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}/favorite`;
    return this.http.delete<AddToFavoriteResponseInterface>(url, {})
      .pipe(
        map(this.getArticle)
      );
  }
}
