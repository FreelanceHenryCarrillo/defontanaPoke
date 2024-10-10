import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './components/content/content.component';
import { DetailCardsComponent } from './components/detail-cards/detail-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { NgClass } from '@angular/common';
import { TableContentComponent } from './components/table-content/table-content.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContentComponent,
    TableContentComponent,
    DetailCardsComponent,
    HeaderComponent,
    FormsModule,
    NgClass,
    NgIconComponent,
  ],
  viewProviders: [provideIcons({ heroArrowLeft })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isActiveSidebar: boolean = true;

  setActiveSideBar() {
    this.isActiveSidebar = !this.isActiveSidebar;
  }
}
