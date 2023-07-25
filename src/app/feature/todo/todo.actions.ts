import { createAction, props } from '@ngrx/store';


export const add = createAction(
  '[TODO] Create',
  props<{ text: string }>()
);
