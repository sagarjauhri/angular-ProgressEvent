import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private url: string = 'https://jsonplaceholder.typicode.com/comments';
  private postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const req = new HttpRequest('POST', this.postUrl, data, {
      reportProgress: true
      // responseType: 'arraybuffer'
    });
    return this.http.request(req);
  }
}
