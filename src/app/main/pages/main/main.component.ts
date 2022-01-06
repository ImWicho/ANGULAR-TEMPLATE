import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/main.reducer';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {
  @ViewChild('matDrawer') drawer!: MatDrawer;
  isResponsive = false;

  constructor(private store: Store<AppState>,
              private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.store.select('app').subscribe((data) => this.isResponsive = data.isResponsive);
    this.sidenavService.toggle$.subscribe(() => this.drawer.toggle());
  }

}
