import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[TODO] Create',
  props<{ text: string }>()
);

export const toggleCompleted = createAction(
  '[TODO] ToggleCompleted',
  props<{ id: number }>()
);
