import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { UserProfileInterface } from "../types/user-profile.interface";
import { environment } from "src/environments/environment";
import { UserProfileResponseInterface } from "../types/user-profile-response.interface";


@Injectable()
export class UserProfileService {
  constructor(
    private http: HttpClient
  ) { }

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get<UserProfileResponseInterface>(url).pipe(
      map(response => response.profile)
    )
  }
}
