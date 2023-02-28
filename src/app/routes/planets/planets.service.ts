import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planets } from 'src/app/models/planets.model';

@Injectable()
export class PlanetsService {
  constructor(private readonly httpClient: HttpClient) {}

  getStarshipById(id: string): Observable<Planets> {
    return this.httpClient.get<Planets>(`/films/${id}`);
  }
}
