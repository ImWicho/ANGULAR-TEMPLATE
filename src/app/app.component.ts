import { Component } from '@angular/core';
import { IconService } from '@services/icon.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-template';

  constructor(private breakpointObserver: BreakpointObserver,
              private iconSvc: IconService) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((data: BreakpointState) => {
        console.log(data.matches);
        
      });
  }
}
