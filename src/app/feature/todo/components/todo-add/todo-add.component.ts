import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  @Output() addTodo = new EventEmitter<string>;

  protected todoControl = new FormControl<string>('', { nonNullable: true, validators: Validators.required });

  protected onKeyUpEnter(): void {
    if (!this.todoControl.valid) return
    this.addTodo.emit(this.todoControl.value);
    this.todoControl.reset();
  }
}
