import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly BASE_URL: string = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  public getAllBeers(): Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL);
  }






}
