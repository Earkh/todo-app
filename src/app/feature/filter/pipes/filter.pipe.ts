import { Pipe, PipeTransform } from '@angular/core';
import { Filter, Filters } from '../models/filter.model';
import { ITodo } from '../../todo/models/todo.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(todos: ITodo[], filter: Filter): ITodo[] {
    switch (filter) {
      case Filters.COMPLETED:
        return todos.filter(todo => todo.isCompleted);
      case Filters.ACTIVE:
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos
    }
  }

}
