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
  rollResult?: number;
  diceValues: string[] = [];
  modifier: number = 0;
  currentSkillName: string = ''; // To track which skill is being rolled

  rollDice() {
    const numberOfDice = 4;
    let total = 0;
    this.diceValues = [];

    for (let i = 0; i < numberOfDice; i++) {
      // Generate random number 0-5 for six-sided die
      const roll = Math.floor(Math.random() * 6);
      let dieValue = '';

      // Map the roll to the appropriate value:
      // 0,1 = -1 (minus)
      // 2,3 = 0  (blank)
      // 4,5 = +1 (plus)
      if (roll < 2) {
        total -= 1; // minus
        dieValue = '-';
      } else if (roll > 3) {
        total += 1; // plus
        dieValue = '+';
      } else {
        dieValue = ' '; // blank
      }

      this.diceValues.push(dieValue);
    }

    // Add the modifier to the total
    this.rollResult = total + this.modifier;
  }

  // New method to roll a specific skill
  rollSkill(skill: any) {
    this.modifier = skill.level;
    this.currentSkillName = skill.name;
    this.rollDice();
  }

  save() {
    console.log(this.character);
  }
}
