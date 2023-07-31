import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input({required: true}) todo!: ITodo;
  @Output() toggleCompleted = new EventEmitter<number>();

  protected onToggleCompleted(id: number): void {
    this.toggleCompleted.emit(id);
  }
}
