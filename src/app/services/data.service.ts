import { Injectable } from '@angular/core';
import { News } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedCard: News[] = [];

  setSelectedCard(card: News[]) {
    this.selectedCard = card;
  }

  getSelectedCard(): News[] {
    return this.selectedCard;
  }
}
