import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { Gender, NPC, NPCGenerator } from '@randomgeekdom/rollbard';

@Component({
  selector: 'app-character-generator',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule],
  templateUrl: './character-generator.component.html',
  styleUrl: './character-generator.component.scss'
})
export class CharacterGeneratorComponent {
  npcGenerator = new NPCGenerator();
  npc!: NPC;

  constructor() {
    this.generate();
  }

  generate() {
    this.npc = this.npcGenerator.Generate();
  }

  GetGender(gender: Gender) {
    return Gender[gender];
  }
  
  GetGenders(): Gender[]{
    return <Gender[]>Object.values(Gender).filter(value => !isNaN(Number(value)));
  }

  get IsRuler(){
    return this.npc?.Job.trim().toLowerCase() === "ruler";
  }
}
