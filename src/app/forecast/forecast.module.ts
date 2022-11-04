import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForecastsListComponent } from './components';
import { ForecastRoutingModule } from './forecast.routing';

@NgModule({
  declarations: [ForecastsListComponent],
  imports: [CommonModule, ForecastRoutingModule],
})
export class ForecastModule {}
