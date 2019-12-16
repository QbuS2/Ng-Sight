import { SesctionHealthComponent } from './app/sections/sesction-health/sesction-health.component';
import { SesctionOrdersComponent } from './app/sections/sesction-orders/sesction-orders.component';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: 'sales', component: SectionSalesComponent },
  {path: 'orders', component: SesctionOrdersComponent},
  {path: 'health', component: SesctionHealthComponent},

  {path: '', redirectTo: '/sales', pathMatch: 'full'}

];
