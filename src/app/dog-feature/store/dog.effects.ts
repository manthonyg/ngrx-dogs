import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, fromEventPattern, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DogService } from '../service/dog.service';
import {
  DogActionTypes,
  fetchDogsSuccess,
  fetchDogsError,
} from './dog.actions';
@Injectable()
export class DogEffects {
  loadDogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogActionTypes.FetchDogs),
      mergeMap(() =>
        this.dogService.fetchDogs().pipe(
          map((dogs) => fetchDogsSuccess({ dogs: dogs })),
          catchError(() => of({ type: DogActionTypes.FetchDogsError }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dogService: DogService) {}
}
