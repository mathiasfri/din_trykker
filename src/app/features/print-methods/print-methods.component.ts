import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionHeader, AccordionModule, AccordionPanel } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-print-methods',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AccordionModule,
    CardModule,
    ChipModule,
    TagModule,
    DividerModule,
    ButtonModule,
    TimelineModule,
    TooltipModule,
  ],
  templateUrl: './print-methods.component.html',
})
export class PrintMethodsComponent {
  steps = [
    {
      status: '1. Design',
      detail:
        'Vi modtager dit logo/design (PNG/SVG/PDF). Vi tjekker opløsning, farver og størrelse.',
    },
    {
      status: '2. Print på film',
      detail: 'Motivet printes spejlvendt på en PET-film med specialblæk.',
    },
    {
      status: '3. Varmeoverførsel',
      detail: 'Filmen placeres på tekstilet og presses ved varme/tryk – limen binder til stoffet.',
    },
    {
      status: '4. Kold afpælning',
      detail: 'Filmen pilles af efter afkøling. Evt. efterpres for ekstra holdbarhed.',
    },
    {
      status: '5. Bekræftelse og afsendelse',
      detail: 'Resultatet bliver bekræftet hos dig og afsendt når begge parter er glade.',
    },
  ];

  pros = [
    'Knivskarp detaljegrad og fuld farve (inkl. gradienter/foto).',
    'Høj holdbarhed ved korrekt vask (40 °C, vrangen ud).',
    'Fungerer på mange materialer: bomuld, polyester, blends, workwear.',
    'Lav opstart – godt til små/mellem serier og mange varianter (navne/numre).',
  ];

  cons = [
    'Ikke samme “indvævede” look som broderi.',
    'Meget små motiver kan føles en smule “film-agtige” på meget tynde stoffer.',
    'Ved store, fulddækkende flader kan åndbarheden være lidt lavere.',
  ];

  fileTips = [
    'Foretrukket: vektorfiler (SVG/PDF/AI).',
    'Raster: PNG 300 dpi i endelig størrelse (gennemsigtig baggrund).',
    'Undgå meget tynde linjer (< 0,5–0,7 mm) og mikroskopiske detaljer.',
    'Indbyg dine specialfonte – eller konverter tekst til outlines.',
  ];

  care = [
    'Vask ved max 40 °C (fortrukket vrangen ud).',
    'Undgå tørretumbler og skyllemiddel for længst mulig holdbarhed.',
    'Stryg gerne (helst vrangen ud for at undgå skade på logo/design).',
  ];
}
