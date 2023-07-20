import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { TodoFooterComponent } from '../../components/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from '../../components/todo-header/todo-header.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoListComponent
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

}
