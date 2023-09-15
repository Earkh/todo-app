import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectTodos } from '../../todo.selectors';
import { add, edit, remove, removeAllCompleted, toggleAllCompleted, toggleCompleted } from '../../todo.actions';
import { TodoHeaderComponent,TodoListComponent, TodoFooterComponent } from '../../components';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ITodo } from '../../models/todo.model';
import { Filter } from '../../../filter/models/filter.model';
import { selectFilter} from '../../../filter/filter.selectors';
import { setFilter } from '../../../filter/filter.actions';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoListComponent
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  private store = inject(Store);

  protected todos: Signal<ITodo[]> = this.store.selectSignal(selectTodos);
  protected selectedFilter: Signal<Filter> = this.store.selectSignal(selectFilter);

  protected addTodo(text: string): void {
    this.store.dispatch(add({text}));
  }

  protected editTodo(todo: ITodo): void {
    this.store.dispatch(edit(todo));
  }

  protected removeTodo(id: number): void {
    this.store.dispatch(remove({ id }));
  }

  protected removeAllCompleted(): void {
    this.store.dispatch(removeAllCompleted())
  }

  protected toggleCompleted(id: number): void {
    this.store.dispatch(toggleCompleted({ id }));
  }

  protected onToggleAllCompleted(): void {
    this.store.dispatch(toggleAllCompleted());
  }

  protected setFilter(filter: Filter): void {
    this.store.dispatch(setFilter({ filter }));
  }
}
