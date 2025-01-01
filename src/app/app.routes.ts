import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TerraMachinaComponent} from './terra-machina/terra-machina.component';
import {CharacterRollerComponent} from './character-roller/character-roller.component';
import {FateCoreComponent} from './fate-core/fate-core.component';
import {PlotRollerComponent} from './plot-roller/plot-roller.component';
import {WorldRollerComponent} from "./world-roller/world-roller.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {FateCoreCharacterComponent} from "./fate-core/fate-core-character/fate-core-character.component";
import {VigilantCityComponent} from "./vigilant-city/vigilant-city.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: ' - Home - ', show: true}},
  {path: 'character-roller', component: CharacterRollerComponent, data: {title: 'Character Roller', show: true}},
  {
    path: 'fate-core',
    component: FateCoreComponent,
    data: {title: 'FATE Core', show: true},
    children: [
      {path: '', redirectTo: '/fate-core/character', pathMatch: 'full'},
      {path: 'character', component: FateCoreCharacterComponent},
    ]
  },
  {path: 'plot-roller', component: PlotRollerComponent, data: {title: 'Plot Roller', show: true}},
  {path: 'reviews', component: ReviewsComponent, data: {title: 'Reviews', show: true}},
  {path: 'terra-machina', component: TerraMachinaComponent, data: {title: 'Terra Machina', show: true}},
  {path: 'vigilant-city', component: VigilantCityComponent, data: {title: 'Vigilant City', show: true}},
  {path: 'world-roller', component: WorldRollerComponent, data: {title: 'World Roller', show: true}}
];
