import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  set(key: string, data: any): void {
    try {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(key, JSON.stringify(data));
      }
    } catch (e) {
      console.error('Error saving to local storage', e);
    }
  }

  get(key: string): any {
    try {
      if (isPlatformBrowser(this.platformId)) {
        return JSON.parse(localStorage.getItem(key));
      }
    } catch (e) {
      console.error('Error getting data from local storage', e);
      return null;
    }
  }
  constructor(@Inject(PLATFORM_ID) private platformId) { }
}
