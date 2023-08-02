import { createAction, props } from '@ngrx/store';
import { ITodo } from './models/todo.model';

export const add = createAction(
  '[TODO] Create',
  props<{ text: string }>()
);

export const edit = createAction(
  '[TODO] Edit',
  props<ITodo>()
)

export const remove = createAction(
  '[TODO] Remove',
  props<{id: number}>()
)

export const toggleCompleted = createAction(
  '[TODO] ToggleCompleted',
  props<{ id: number }>()
);

export const toggleAllCompleted = createAction(
  '[TODO] toggleAllCompleted'
);
