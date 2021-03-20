import { createAction, props } from '@ngrx/store';
import { Dog } from '../models/dog.model';

export enum DogActionTypes {
  AddDog = '[DogComponent] Add Dog',
  DeleteDog = '[Dog Component] Delete Dog',
  FetchDogs = '[Dog Service] Fetch Dogs',
}

export const addDog = createAction(DogActionTypes.AddDog, props<Dog>());

export const deleteDog = createAction(DogActionTypes.DeleteDog, props<Dog>());

export const fetchDogs = createAction(DogActionTypes.FetchDogs);
