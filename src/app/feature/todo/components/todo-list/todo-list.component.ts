import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { ITodo } from '../../models/todo.model';
import { FilterPipe } from '../../../filter/pipes/filter.pipe';
import { Filter } from '../../../filter/models/filter.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FilterPipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input({ required: true }) todos!: ITodo[];
  @Input({ required: true }) selectedFilter!: Filter;
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<ITodo>();
  @Output() removeTodo = new EventEmitter<number>();

  protected onToggleCompleted(id: number): void {
    this.toggleCompleted.emit(id);
  }

  protected onEditTodo(todo: ITodo): void {
    this.editTodo.emit(todo);
  }

  protected onRemoveTodo(id: number): void {
    this.removeTodo.emit(id);
  }
}
