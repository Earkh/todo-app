import { Action, createReducer, on } from '@ngrx/store';
import { ITodo, Todo } from './models/todo.model';
import { add, edit, remove, toggleCompleted } from './todo.actions';

export const initialState: ITodo[] = [];

export const _todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo( text )]),
  on(toggleCompleted, (state, { id }) => {
    return [...state.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)];
  }),
  on(edit, (state, { id, text }) => {
    return [...state.map(todo => todo.id === id ? { ...todo, text } : todo)];
  }),
  on(remove, (state, { id }) => {
    return [...state.filter(todo => todo.id !== id)];
  })
)

export function todoReducer(state: ITodo[] | undefined, action: Action) {
  return _todoReducer(state, action)
}
