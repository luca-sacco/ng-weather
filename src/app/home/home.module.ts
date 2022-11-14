import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import {
  ConditionDetailComponent,
  ConditionsListComponent,
  MainPageComponent,
  SearchLocationComponent,
} from './components';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchLocationComponent,
    ConditionsListComponent,
    ConditionDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
