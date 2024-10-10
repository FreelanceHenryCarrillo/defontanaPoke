import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRightCircle } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  viewProviders: [provideIcons({ heroArrowRightCircle })],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() count: number = 0;
  @Output() pageChange = new EventEmitter<number>();
  page: number = 1;

  nextPage() {
    this.page++;
    this.pageChange.emit(this.page); 
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.pageChange.emit(this.page); 
    }
  }
}
