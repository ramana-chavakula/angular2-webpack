import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IFeed } from './IFeed';

@Injectable()
export class FeedsService {
  constructor(private http: Http) {
  }
  public getFeeds(): Observable<IFeed[]> {
    return this.http.get('./data/feeds.json')
      .map((response: Response) => response.json());
  }
  public getFeed(id: string): Observable<IFeed> {
    return this.http.get('./data/feeds.json')
      .map((response: Response) => {
        let feeds: IFeed[] = response.json();
        for (let feed of feeds) {
          if (feed.id === id) {
            return feed;
          }
        }
      });
  }
}