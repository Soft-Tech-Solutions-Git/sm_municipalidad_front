import { Component, Input } from '@angular/core';
import { News } from 'src/app/interfaces/news.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css'],
})
export class NewDetailsComponent {
  normalNew: News[] = [];
  constructor(private dataService: DataService) {
    this.normalNew = this.dataService.getSelectedCard();
  }
}
