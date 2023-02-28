import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from 'src/app/models/films.model';

@Injectable()
export class FilmsService {
  constructor(private readonly httpClient: HttpClient) {}

  getStarshipById(id: string): Observable<Films> {
    return this.httpClient.get<Films>(`/films/${id}`);
  }
}
