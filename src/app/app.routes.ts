import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.shell').then(m => m.AppShellComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'om', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
      { path: 'kontakt', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'trykmetoder/dtf', loadComponent: () => import('./features/print-methods/print-methods.component').then(m => m.PrintMethodsComponent) },
      { path: 'tilbud', loadComponent: () => import('./features/offers/offers.component').then(m => m.OffersComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
