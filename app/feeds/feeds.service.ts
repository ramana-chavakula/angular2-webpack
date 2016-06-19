import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {IFeed} from './IFeed.ts';

@Injectable()
export class FeedsService {
  constructor(private http: Http) {
  }
  getFeeds (): Observable <IFeed[]> {
    return this.http.get('/data/feeds.json')
    .map((response: Response) => response.json());
  }
}