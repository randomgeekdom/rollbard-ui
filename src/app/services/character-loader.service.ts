import {Injectable} from '@angular/core';
import {NPC} from "@randomgeekdom/rollbard";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterLoaderService {

  constructor(private storageService: StorageService) {
  }

  key = 'characters';

  saveCharacters(characters: NPC[]) {
    this.storageService.setItem(this.key, characters);
  }

  getCharacters(): NPC[] {
    return this.storageService.getItem(this.key) || [];
  }
}
