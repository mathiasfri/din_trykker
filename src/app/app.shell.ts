import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="min-h-[calc(100vh-240px)]">
      <router-outlet />
    </main>
  `,
})
export class AppShellComponent {}
