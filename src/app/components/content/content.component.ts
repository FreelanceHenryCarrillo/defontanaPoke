import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlassCircle } from '@ng-icons/heroicons/outline';
import { TableContentComponent } from '../table-content/table-content.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgIconComponent, FormsModule, TableContentComponent],
  templateUrl: './content.component.html',
  viewProviders: [provideIcons({ heroMagnifyingGlassCircle })],
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Output() filterChanged = new EventEmitter<string>();
  filterTerm: string = '';

  onFilterChange() {
    this.filterChanged.emit(this.filterTerm);
  }
}
