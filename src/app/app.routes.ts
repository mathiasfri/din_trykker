import { Routes } from '@angular/router';
import { AppShellComponent } from './app.shell';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'om',
        loadComponent: () =>
          import('./features/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'kontakt',
        loadComponent: () =>
          import('./features/contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'trykmetoder/dtf',
        loadComponent: () =>
          import('./features/print-methods/print-methods.component').then(
            (m) => m.PrintMethodsComponent
          ),
      },
      {
        path: 'tilbud',
        loadComponent: () =>
          import('./features/offers/offers.component').then((m) => m.OffersComponent),
      },

    ],
  },
  { path: '**', redirectTo: '' },
];
