import { Component } from '@angular/core';
import { SidenavService } from '@services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  {

  constructor(private sidenavService: SidenavService) { }

  toggleSidenav():void{
    this.sidenavService.toggle$.next();
  }

}
