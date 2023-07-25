import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ITodo } from '../../../models/todo.model';
import { TodoForm } from '../models/todo-form.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFormService {

  createForm(todos?: ITodo[]): FormArray<FormGroup<TodoForm>> {
    return new FormArray(
      todos?.map(todo => this.createTodoForm(todo)) || [this.createTodoForm()]
    )
  }

  createTodoForm(todo?: ITodo): FormGroup<TodoForm> {
    return new FormGroup<TodoForm>({
      text: new FormControl(todo?.text ?? '', { nonNullable: true })
    })
  }
}
