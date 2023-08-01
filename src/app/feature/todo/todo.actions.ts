import { createAction, props } from '@ngrx/store';
import { ITodo } from './models/todo.model';

export const add = createAction(
  '[TODO] Create',
  props<{ text: string }>()
);

export const toggleCompleted = createAction(
  '[TODO] ToggleCompleted',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TODO] EditTodo',
  props<ITodo>()
)
