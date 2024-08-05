import { Component } from '@angular/core';
import { Area } from 'src/app/interfaces/area.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-areas-full',
  templateUrl: './areas-full.component.html',
  styleUrls: ['./areas-full.component.css'],
})
export class AreasFullComponent {
  areas: Area[] = [];
  constructor(private dataService: DataService) {
    this.areas = this.dataService.getAreaSelected();
    console.log(this.areas);
  }
}
