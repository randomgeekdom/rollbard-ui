import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import FateCoreCharacter from "../models/fate-core/fate-core-character";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {CommonModule, NgForOf} from "@angular/common";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-fate-core',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './fate-core.component.html',
  styleUrl: './fate-core.component.scss'
})
export class FateCoreComponent {
  character: FateCoreCharacter = new FateCoreCharacter();

  save() {
    console.log(this.character);
  }
}
