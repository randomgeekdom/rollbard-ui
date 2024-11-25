import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-terra-machina',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButton],
  templateUrl: './terra-machina.component.html',
  styleUrl: './terra-machina.component.scss'
})
export class TerraMachinaComponent {

  openUrl(pdf: string) {
    const link = document.createElement('a');
    link.href = pdf;
    // @ts-ignore
    link.setAttribute('download', pdf.split('/').pop());
    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  }
}
