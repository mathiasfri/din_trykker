import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonDirective } from "primeng/button";
import { RouterLink } from '@angular/router';

type Offer = {
  title: string;
  desc: string;
  img: string;
  link?: string;
};

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CardModule, TagModule, ButtonDirective, RouterLink],
  templateUrl: './offers.component.html',
})
export class OffersComponent {
  offers: Offer[] = [
    {
      title: 'Firmatøj',
      desc: 'Slidstærkt arbejdstøj med logo – hi-vis, softshell, jakker, bukser m.m.',
      img: '/img/offers/arbejdstoj.png'
    },
    {
      title: 'Profilbeklædning',
      desc: 'T-shirts, poloer og hoodies i skarpe farver og bløde kvaliteter.',
      img: '/img/offers/profilbeklaedning.png'
    },
    {
      title: 'Merchandise',
      desc: 'Kasketter, tasker og smågaver – perfekt til events og kunder.',
      img: '/img/offers/kasket.png'
    },
    {
      title: 'Sportstøj',
      desc: 'Åndbare trøjer og sæt med navn/nummer – hold, events og klubber.',
      img: '/img/offers/sportstoj.png'
    },
    {
      title: 'Skole / Efterskole',
      desc: 'Årgangshoodies og klasse-merch – fællesskab med jeres logo.',
      img: '/img/offers/t-shirt.png'
    },
  ];
}
