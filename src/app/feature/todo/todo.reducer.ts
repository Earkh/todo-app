import { Action, createReducer, on } from '@ngrx/store';
import { ITodo, Todo } from './models/todo.model';
import { add, edit, remove, toggleAllCompleted, toggleCompleted } from './todo.actions';

export const initialState: ITodo[] = [];

export const _todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo( text )]),
  on(edit, (state, { id, text }) => state.map(todo => todo.id === id ? { ...todo, text } : todo)),
  on(remove, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleCompleted, (state, { id }) => state.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
  on(toggleAllCompleted, (state) => state.map(todo => ({ ...todo, isCompleted: !todo.isCompleted })))
)

export function todoReducer(state: ITodo[] | undefined, action: Action) {
  return _todoReducer(state, action)
}
