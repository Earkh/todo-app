import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from '../../models/todo.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input({ required: true }) todo!: ITodo;
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<ITodo>();
  @ViewChild('inputText') inputText!: ElementRef;

  protected textControl!: FormControl<string>;
  protected isEditingControl!: FormControl<boolean>;

  ngOnInit(): void {
    this.textControl = new FormControl<string>(this.todo!.text ?? '', {
      nonNullable: true,
      validators: Validators.required
    });
    this.isEditingControl = new FormControl<boolean>(false, { nonNullable: true });
  }

  protected get isEditing(): boolean {
    return this.isEditingControl.value;
  }

  protected onToggleCompleted(id: number): void {
    this.toggleCompleted.emit(id);
  }

  protected onSetEditing(): void {
    this.isEditingControl.setValue(true);
    setTimeout(() => {
      this.inputText.nativeElement.select();
    })
  }

  protected onCloseEditing(): void {
    this.isEditingControl.setValue(false);
  }

  protected onEditTodo(): void {
    this.editTodo.emit({
      ...this.todo,
      text: this.textControl.value
    })
  }
}
