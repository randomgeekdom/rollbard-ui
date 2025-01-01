import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import FateCoreCharacter from "../../models/fate-core/fate-core-character";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-fate-core-character',
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
  templateUrl: './fate-core-character.component.html',
  styleUrl: './fate-core-character.component.scss'
})
export class FateCoreCharacterComponent {
  character: FateCoreCharacter = new FateCoreCharacter();

  save() {
    console.log(this.character);
  }
}
