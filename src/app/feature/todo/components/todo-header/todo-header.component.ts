import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'app-todo-header',
  standalone: true,
  imports: [CommonModule, TodoAddComponent],
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent {
  @Output() addTodo = new EventEmitter<string>;

  protected onAddTodo(text: string): void {
    this.addTodo.emit(text);
  }
}
