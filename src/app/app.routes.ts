import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TerraMachinaComponent } from './terra-machina/terra-machina.component';
import { CharacterRollerComponent } from './character-roller/character-roller.component';
import { FateCoreComponent } from './fate-core/fate-core.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data:{ title: 'Home', show: true} },
    { path: 'terra-machina', component: TerraMachinaComponent, data:{ title: 'Terra Machina', show: true} },
    { path: 'character-roller', component: CharacterRollerComponent, data:{ title: 'Character Roller', show: true} },
    { path: 'fate-core', component: FateCoreComponent, data:{ title: 'FATE Core', show: true} },
];
