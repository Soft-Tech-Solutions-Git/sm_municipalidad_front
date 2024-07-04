import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AdaptativeService {
  public sizeDisplay: string = 'phone' || 'web';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  private observeScreenSize(): void {
    this.breakpointObserver
      .observe(Breakpoints.Small)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('phone');
          this.sizeDisplay = 'phone';
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Tablet)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('tablet');
          this.sizeDisplay = 'tablet';
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Web)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('web');
          this.sizeDisplay = 'web';
        }
      });
  }
}
