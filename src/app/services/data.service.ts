import { Injectable } from '@angular/core';
import { News } from '../interfaces/news.interface';
import { Area } from '../interfaces/area.interface';

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

  private areaSelected: Area[] = [];

  setAreaSelected(card: Area[]) {
    this.selectedCard = card;
  }

  getAreaSelected(): Area[] {
    return this.selectedCard;
  }
}
