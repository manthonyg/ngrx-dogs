import { createReducer, on, Action } from '@ngrx/store';
import {
  addDog,
  addDogSuccess,
  addDogError,
  deleteDog,
  deleteDogSuccess,
  deleteDogError,
  fetchDogsSuccess,
  fetchDogsError,
} from './dog.actions';
import { Dog } from '../models/dog.model';
import { DogService } from '../service/dog.service';
import { AppState } from '../../app.state';
import { ApplicationInitStatus } from '@angular/core';
import { DogActionTypes } from './dog.actions';
export const initialState: AppState = {
  dogs: [],
  loading: false,
  isError: false,
  errorMessage: null,
};

const _dogReducer = createReducer(
  initialState,
  on(addDog, (state, action) => {
    if (action.name === 'moo')
      return {
        ...state,
        isError: true,
        errorMessage: 'No moo moos allowed',
      };
    else
      return {
        ...state,
        isError: false,
        errorMessage: null,
        dogs: [...state.dogs, { name: action.name }],
      };
  }),
  on(addDogSuccess, (state, action) => {
    return state;
  }),
  on(addDogError, (state, action) => {
    return state;
  }),
  on(deleteDog, (state, action) => ({
    ...state,
    dogs: state.dogs.filter((dog) => dog.name !== action.name),
  })),
  on(deleteDogSuccess, (state, action) => {
    return state;
  }),
  on(deleteDogError, (state, action) => {
    return state;
  }),
  on(fetchDogsSuccess, (state, action) => ({
    ...state,
    dogs: [...state.dogs, ...action.dogs],
  }))
);

// This is a workaround for the View Engine as it does not support function calls
export const dogReducer = (state: AppState | undefined, action: Action) => {
  return _dogReducer(state, action);
};
