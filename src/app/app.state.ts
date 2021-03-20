import { Dog } from './dog-feature/models/dog.model';

export interface AppState {
  dogs: ReadonlyArray<Dog>;
}
