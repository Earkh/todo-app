import { Action, createReducer, on } from '@ngrx/store';
import { Filter } from './models/filter.model';
import { setFilter } from './filter.actions';


export const initialState: Filter = 'All';

export const _filterReducer = createReducer<Filter, Action>(
  initialState,
  on(setFilter, (state: Filter, { filter }) => filter),
)

export function filterReducer(state: Filter | undefined, action: Action) {
  return _filterReducer(state, action)
}
