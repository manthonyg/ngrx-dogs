import { AppState } from '../../app.state';

export const getDogs = (state: AppState) => state.dogs;
export const getErrorMessage = (state: AppState) => state.errorMessage;
