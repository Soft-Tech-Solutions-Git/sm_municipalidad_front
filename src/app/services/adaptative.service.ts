import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class AdaptativeService {
  public sizeDisplay: string = 'tablet' || 'web';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  private observeScreenSize(): void {
    this.breakpointObserver
      .observe(Breakpoints.Tablet)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sizeDisplay = 'tablet';
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Web)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sizeDisplay = 'web';
        }
      });
  }
}
