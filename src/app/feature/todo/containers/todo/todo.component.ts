import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectTodos } from '../../todo.selectors';
import { add, editTodo, toggleCompleted } from '../../todo.actions';
import { TodoFormService } from './services/todo-form.service';
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
export class TodoComponent implements OnInit {

  private store = inject(Store);
  private todoFormService = inject(TodoFormService);

  protected todos: Signal<ITodo[]> = this.store.selectSignal(selectTodos);
  protected todoForm!: FormArray;

  ngOnInit(): void {
    this.createForm(this.todos());
  }

  protected onAddTodo(text: string): void {
    this.store.dispatch(add({text}));
  }

  protected onToggleCompleted(id: number): void {
    this.store.dispatch(toggleCompleted({ id }));
  }

  protected onEditTodo(todo: ITodo): void {
    this.store.dispatch(editTodo(todo));
  }

  private createForm(todos: ITodo[]) {
    this.todoForm = this.todoFormService.createForm(todos);
  }
}
