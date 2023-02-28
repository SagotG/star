import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { People, PeopleResponse } from 'src/app/models/people.model';
import { extractParams } from 'src/app/utils/tools';

@Injectable()
export class PeopleService {
  constructor(private readonly httpClient: HttpClient) {}

  getAllPeople(page: string): Observable<PeopleResponse> {
    let options = {
      params: new HttpParams().set('page', page),
    };
    return this.httpClient.get<PeopleResponse>(`/people`, options).pipe(
      map((list) => ({
        next: extractParams(list.next, '/'),
        results: list.results.map((value) => ({
          ...value,
          url: extractParams(value.url, '/'),
          films: value.films.map((f) => extractParams(f, '/')),
          starships: value.starships.map((f) => extractParams(f, '/')),
          vehicles: value.vehicles.map((f) => extractParams(f, '/')),
          species: value.species.map((f) => extractParams(f, '/')),
          homeworld: extractParams(value.homeworld, '/'),
        })),
      }))
    );
  }

  getPeopleById(id: string): Observable<People> {
    return this.httpClient.get<People>(`/people/${id}`);
  }
}
