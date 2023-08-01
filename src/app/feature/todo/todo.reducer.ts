import { Action, createReducer, on } from '@ngrx/store';
import { ITodo, Todo } from './models/todo.model';
import { add, editTodo, toggleCompleted } from './todo.actions';

export const initialState: ITodo[] = [];

export const _todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo( text )]),
  on(toggleCompleted, (state, { id }) => {
    let todo = Object.assign({}, state.find(todo => todo.id === id)!);
    todo.isCompleted = !todo.isCompleted;
    return [...state.filter(todo => todo.id !== id), todo]
  }),
  on(editTodo, (state, { id, text }) => {
    let todo = Object.assign({}, state.find(todo => todo.id === id)!);
    todo.text = text;
    return [...state.filter(todo => todo.id !== id), todo]
  })
)

export function todoReducer(state: ITodo[] | undefined, action: Action) {
  return _todoReducer(state, action)
}
