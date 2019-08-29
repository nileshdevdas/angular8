import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpclient: HttpClient) {
    console.log('Instantiated.........................');
  }

  getMovies(): Observable<any> {
    return this.httpclient.get('http://www.mocky.io/v2/5d6652733300004d00449baf');
  }

}
