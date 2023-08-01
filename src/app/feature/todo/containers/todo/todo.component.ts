import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectTodos } from '../../todo.selectors';
import { add, edit, remove, toggleCompleted } from '../../todo.actions';
import { TodoHeaderComponent,TodoListComponent, TodoFooterComponent } from '../../components';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ITodo } from '../../models/todo.model';

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

  protected onAddTodo(text: string): void {
    this.store.dispatch(add({text}));
  }

  protected onToggleCompleted(id: number): void {
    this.store.dispatch(toggleCompleted({ id }));
  }

  protected onEditTodo(todo: ITodo): void {
    this.store.dispatch(edit(todo));
  }

  protected onRemoveTodo(id: number): void {
    this.store.dispatch(remove({ id }));
  }
}
