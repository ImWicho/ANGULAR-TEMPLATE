import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SharedComponentsModule } from '@components/shared-components.module';
import { MaterialModule } from '@modules/material.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SharedComponentsModule
  ]
})
export class MainModule { }
