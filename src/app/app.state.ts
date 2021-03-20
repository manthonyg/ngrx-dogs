import { Dog } from './dog-feature/models/dog.model';

export interface AppState {
  dogs: Dog[];
  loading: boolean;
  isError: boolean;
  errorMessage: string;
}
