import { ActionReducerMap } from '@ngrx/store';
import { ITodo } from './feature/todo/models/todo.model';
import { Filter } from './feature/filter/models/filter.model';
import { todoReducer } from './feature/todo/todo.reducer';
import { filterReducer } from './feature/filter/filter.reducer';

export interface AppState {
  todos: ITodo[],
  filter: Filter
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
