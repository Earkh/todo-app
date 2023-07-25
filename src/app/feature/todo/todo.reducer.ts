import { Action, createReducer, on } from '@ngrx/store';
import { ITodo, Todo } from './models/todo.model';
import { add } from './todo.actions';

export const initialState: ITodo[] = [];

export const _todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo( text )])
)

export function todoReducer(state: ITodo[] | undefined, action: Action) {
  return _todoReducer(state, action)
}
