import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filter, Filters } from '../../../filter/models/filter.model';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {
  @Input({ required: true }) selectedFilter!: Filter;
  @Output() clearCompleted = new EventEmitter;
  @Output() setFilter = new EventEmitter<Filter>;

  protected filters: Filter[] = Object.values(Filters);

  protected onClearCompleted(): void {
    this.clearCompleted.emit();
  }

  protected onClickFilter(filter: Filter): void {
    this.setFilter.emit(filter)
  }

}
