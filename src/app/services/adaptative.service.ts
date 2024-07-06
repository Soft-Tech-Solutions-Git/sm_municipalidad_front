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
  public sizeDisplay: string = 'tablet' || 'web';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeScreenSize();
  }

  private observeScreenSize(): void {
    // this.breakpointObserver
    //   .observe(Breakpoints.Small)
    //   .subscribe((state: BreakpointState) => {
    //     if (state.matches) {
    //       console.log('Phone');
    //       this.sizeDisplay = 'phone';
    //     }
    //   });

    this.breakpointObserver
      .observe(Breakpoints.Tablet)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Tablet');
          this.sizeDisplay = 'tablet';
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Web)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Desktop');
          this.sizeDisplay = 'web';
        }
      });
  }
}
