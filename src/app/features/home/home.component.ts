import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ButtonModule, CardModule, RouterLink, NgOptimizedImage],
    templateUrl: './home.component.html'
})
export class HomeComponent {}