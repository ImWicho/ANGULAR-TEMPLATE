import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '@modules/material.module';

const components = [
  ToolbarComponent,
  SidenavComponent,
  LoaderComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
   ...components
  ]
})
export class SharedComponentsModule { }
