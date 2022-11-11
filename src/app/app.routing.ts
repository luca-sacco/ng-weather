import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'forecast/:zipcode',
    loadChildren: () =>
      import('./forecast/forecast.module').then((m) => m.ForecastModule),
  },
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes,
  { relativeLinkResolution: 'legacy' }
);
