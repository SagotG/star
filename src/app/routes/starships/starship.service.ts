import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starships } from 'src/app/models/starships.model';

@Injectable()
export class StarshipService {
  constructor(private readonly httpClient: HttpClient) {}

  getStarshipById(id: string): Observable<Starships> {
    return this.httpClient.get<Starships>(`/starships/${id}`);
  }
}
