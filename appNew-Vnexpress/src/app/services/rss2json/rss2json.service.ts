import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ResponseObject } from '../../models/responseObject';
@Injectable({
  providedIn: 'root'
})
export class Rss2jsonService {
  private apiUrl = 'https://api.rss2json.com/v1/api.json';
  private apiKey = 'gxhkoesz1pmfqon2jcannfe2ledfn0d8cv8ndqwd';
  private count = 27;


  /** GET heroes from the server */
  getJson(rss_url: string): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.apiUrl}?rss_url=${rss_url}&api_key=${this.apiKey}&count=${this.count}`)
      .pipe(
        tap(_ => this.log('get json')),
        catchError(this.handleError<ResponseObject>('getHeroes', this.nul))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  constructor(private http: HttpClient) { }


  nul: ResponseObject = {
    status: '',
    feed: {
      url: '',
      title: '',
      link: '',
      author: '',
      description: '',
      image: '',
    },
    items: [
      {
        title: '',
        pubDate: '',
        link: '',
        guid: '',
        author: '',
        thumbnail: '',
        description: '',
        content: '',
        enclosure: {
        },
        categories: [
        ]
      }
    ]
  }


}


