import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ITodo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input({ required: true }) todos!: ITodo[];
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<ITodo>();

  protected onToggleCompleted(id: number): void {
    this.toggleCompleted.emit(id);
  }

  protected onEditTodo(todo: ITodo): void {
    this.editTodo.emit(todo)
  }
}
