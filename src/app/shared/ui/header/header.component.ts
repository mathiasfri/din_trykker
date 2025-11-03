import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RouterLink, NgOptimizedImage],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Om',
        routerLink: '/om',
      },
      {
        label: 'Trykmetoder',
        items: [
          {
            label: 'DTF (Direct-to-Film)',
            routerLink: '/trykmetoder/dtf',
          }
        ],
      },
      {
        label: 'Hvad tilbyder vi',
        routerLink: '/tilbud'
      },
      {
        label: 'Kontakt',
        routerLink: '/kontakt',
      },
    ];
  }
}
