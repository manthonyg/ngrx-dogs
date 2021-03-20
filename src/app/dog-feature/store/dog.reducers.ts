import { createReducer, on, Action } from '@ngrx/store';
import { addDog, deleteDog, fetchDogs } from './dog.actions';
import { Dog } from '../models/dog.model';
import { DogService } from '../service/dog.service';
import { AppState } from '../../app.state';

const initialState: Dog[] = [];

export const dogReducer = createReducer(
  initialState,
  on(addDog, (state, dog) => {
    console.log('tried to add dog', dog);
    console.log([...state, dog]);
    return [...state, dog];
  }),
  on(deleteDog, (state, dog) =>
    state.filter((currentDogs) => currentDogs.name !== dog.name)
  )
);
