import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";

@Component({
  selector: 'app-fate-core',
  standalone: true,
  imports: [
    RouterModule,
    MatTabNav,
    MatTabLink,
    MatTabNavPanel
  ],
  templateUrl: './fate-core.component.html',
  styleUrl: './fate-core.component.scss'
})
export class FateCoreComponent {

}
