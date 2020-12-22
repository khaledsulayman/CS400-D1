import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArtistModel} from '../models/ArtistModel';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  endpoint = 'http://localhost:3000/in/';

  getRelated(query: string): Observable<ArtistModel> {
    return this.httpClient.get<ArtistModel>(this.endpoint + query);
  }

  constructor(private httpClient: HttpClient) { }
}
