import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-terra-machina',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './terra-machina.component.html',
  styleUrl: './terra-machina.component.scss'
})
export class TerraMachinaComponent {

}
