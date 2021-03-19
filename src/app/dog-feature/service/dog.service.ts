import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../models/dog.model';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DogService {
  constructor(private _http: HttpClient) {}

  fetchDogs() {
    return this._http.get<Dog[]>('https://dog.ceo/api/breeds/list/all').pipe(
      map((response) => {
        const dogList = [];
        const breeds = Object.keys(response['message']);
        for (let breed of breeds) {
          dogList.push({
            name: breed[0].toUpperCase() + breed.slice(1, breed.length),
          });
        }
        return dogList;
      })
    );
  }
}
