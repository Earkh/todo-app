import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { TodoFooterComponent } from '../../components/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from '../../components/todo-header/todo-header.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { selectTodos } from '../../todo.selectors';
import { TodoFormService } from './services/todo-form.service';
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

  private createForm(todos: ITodo[]) {
    this.todoForm = this.todoFormService.createForm(todos);
  }

}
