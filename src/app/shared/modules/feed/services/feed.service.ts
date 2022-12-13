import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { feedResponseInterface } from '../types/feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string): Observable<feedResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<feedResponseInterface>(fullUrl);
  }
}
