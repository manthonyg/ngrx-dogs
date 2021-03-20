import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DogService } from '../service/dog.service';
import { DogActionTypes } from './dog.actions';
@Injectable()
export class DogEffects {
  loadDogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DogActionTypes.FetchDogs),
      mergeMap(() =>
        this.dogService.fetchDogs().pipe(
          map((dogs) => ({
            type: '[DogComponent] Dog Loaded Success',
            payload: dogs,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private dogService: DogService) {}
}
