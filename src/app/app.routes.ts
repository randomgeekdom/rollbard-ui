import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TerraMachinaComponent } from './terra-machina/terra-machina.component';
import { CharacterRollerComponent } from './character-roller/character-roller.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'terra-machina', component: TerraMachinaComponent },
    { path: 'character-roller', component: CharacterRollerComponent }
];
