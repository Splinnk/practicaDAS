import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'clientes',
    canLoad: [],
    loadChildren: () =>
    import('./clients/clients.module').then((m) => m.ClientsModule)
  },

  {
    path: 'cobertura',
    canLoad: [],
    loadChildren: () =>
    import('./coverage/coverage.module').then((m) => m.CoverageModule)
  },

  {
    path: 'tecnicos',
    canLoad: [],
    loadChildren: () =>
    import('./employees/employees.module').then((m) => m.EmployeesModule)
  },

  {
    path: 'planes',
    canLoad: [],
    loadChildren: () =>
    import('./plans/plans.module').then((m) => m.PlansModule)
  },

  {
    path: 'proveedores',
    canLoad: [],
    loadChildren: () =>
    import('./providers/providers.module').then((m) => m.ProvidersModule)
  },

  {
    path: 'stock',
    canLoad: [],
    loadChildren: () =>
    import('./stock/stock.module').then((m) => m.StockModule)
  },

  {
    path: 'soporte',
    canLoad: [],
    loadChildren: () =>
    import('./support/support.module').then((m) => m.SupportModule)
  },

  {
    path: 'usuarios',
    canLoad: [],
    loadChildren: () =>
    import('./users/users.module').then((m) => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
