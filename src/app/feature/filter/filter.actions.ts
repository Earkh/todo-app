import { createAction, props } from '@ngrx/store';
import { Filter } from './models/filter.model';

export const setFilter = createAction(
  '[FILTER] setFilter',
  props<{filter: Filter}>()
);
