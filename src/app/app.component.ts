import { Component } from '@angular/core';
import { IconService } from '@services/icon.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/main.reducer';
import { isResponsive } from '@redux/actions/app/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-template';

  constructor(private breakpointObserver: BreakpointObserver,
              private iconSvc: IconService,
              private store: Store<AppState>) {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((data: BreakpointState) => {
        this.store.dispatch( isResponsive({ flag: data.matches }));
      });
  }
}
