import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {Gender, NPC, NPCGenerator} from '@randomgeekdom/rollbard';
import {CharacterLoaderService} from "../services/character-loader.service";

@Component({
  selector: 'app-character-roller',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    FormsModule],
  templateUrl: './character-roller.component.html',
  styleUrl: './character-roller.component.scss'
})
export class CharacterRollerComponent {
  npcGenerator = new NPCGenerator();
  npc!: NPC;
  characters: NPC[] = [];

  constructor(private characterLoader: CharacterLoaderService) {
    let characters = characterLoader.getCharacters();
    if (characters.length > 0) {
      this.characters = characters;
      this.npc = characters[0];
    }
    else{
      this.roll();
    }
  }

  roll() {
    this.npc = this.npcGenerator.Generate();
    this.characters = [...this.characters, this.npc];
    this.characterLoader.saveCharacters(this.characters);
  }

  GetGender(gender: Gender) {
    return Gender[gender];
  }

  GetGenders(): Gender[] {
    return <Gender[]>Object.values(Gender).filter(value => !isNaN(Number(value)));
  }

  SelectCharacter(character: NPC): void {
    this.npc = character;
  }

  get IsRuler() {
    return this.npc?.Job.trim().toLowerCase() === "ruler";
  }

  get orderedCharacters(): NPC[] {
    return this.characters.reverse();
  }
}
