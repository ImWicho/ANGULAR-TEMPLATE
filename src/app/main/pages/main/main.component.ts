import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/main.reducer';
import { SidenavService } from '@services/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy  {
  @ViewChild('matDrawer') drawer!: MatDrawer;
  isResponsive = false;
  sub! : Subscription;
  constructor(private store: Store<AppState>,
              private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sub = this.store.select('app').subscribe((data) => this.isResponsive = data.isResponsive);
    this.sidenavService.toggle$.subscribe(() => this.drawer.toggle());
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
