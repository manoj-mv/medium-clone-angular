import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { PopularTagsResponseInterface } from "src/app/shared/modules/popular-tags/types/popular-tags-response.interface";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PopularTagsService {
  constructor(
    private http: HttpClient
  ) { }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get<PopularTagsResponseInterface>(url).pipe(
      map(response => response.tags)
    );
  }
}
