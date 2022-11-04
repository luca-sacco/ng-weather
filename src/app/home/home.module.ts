import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CurrentConditionsComponent,
  MainPageComponent,
  ZipcodeEntryComponent,
} from './components';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    MainPageComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
