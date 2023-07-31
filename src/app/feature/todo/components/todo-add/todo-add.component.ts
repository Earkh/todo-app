import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { add } from '../../todo.actions';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  private store = inject(Store<AppState>);

  protected todoControl = new FormControl<string>('', { nonNullable: true, validators: Validators.required });

  protected onKeyUpEnter(): void {
    if (!this.todoControl.valid) return
    this.addTodo(this.todoControl.value);
    this.todoControl.reset();
  }

  private addTodo(text: string): void {
    this.store.dispatch(add({text}));
  }
}
