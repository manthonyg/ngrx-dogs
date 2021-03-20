import { createAction, props } from '@ngrx/store';
import { Dog } from '../models/dog.model';

export enum DogActionTypes {
  AddDog = '[DogComponent] Add Dog',
  AddDogSuccess = '[DogComponent] Successfully Added Dog',
  AddDogError = '[DogComponent] Could Not Add Dog',

  DeleteDog = '[Dog Component] Delete Dog',
  DeleteDogSuccess = '[Dog Component] Successfully Deleted Dog',
  DeleteDogError = '[Dog Component] Could Not Delete Dog',

  FetchDogs = '[Dog Service] Fetch Dogs',
  FetchDogsSuccess = '[Dog Service] Successfully Fetched Dogs',
  FetchDogsError = '[Dog Service] Could Not Fetch Dogs',
}

export const addDog = createAction(DogActionTypes.AddDog, props<Dog>());
export const addDogSuccess = createAction(DogActionTypes.AddDogSuccess);
export const addDogError = createAction(DogActionTypes.AddDogError);

export const deleteDog = createAction(DogActionTypes.DeleteDog, props<Dog>());
export const deleteDogSuccess = createAction(DogActionTypes.DeleteDogSuccess);
export const deleteDogError = createAction(DogActionTypes.DeleteDogError);

export const fetchDogs = createAction(DogActionTypes.FetchDogs);
export const fetchDogsSuccess = createAction(
  DogActionTypes.FetchDogsSuccess,
  props<{ dogs: Dog[] }>()
);
export const fetchDogsError = createAction(DogActionTypes.FetchDogsError);
