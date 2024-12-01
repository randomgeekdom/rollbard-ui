import FateCoreStunt from "./fate-core-stunt";
import FateCoreStressTrack from "./fate-core-stress-track";
import FateCoreSkill from "./fate-core-skill";
import FateCoreTextValue from "./fate-core-text-value";

export default class FateCoreCharacter {
  name = "";
  description = "";
  aspects: FateCoreTextValue[] = [];
  stunts: FateCoreStunt[] = [];
  extras: FateCoreTextValue[] = [];
  stressTracks: FateCoreStressTrack[] = [];
  consequence2: string = "";
  consequence4: string = "";
  consequence6: string = "";
  skills: FateCoreSkill[] = [];

  static skillNames = [
    "Athletics", "Burglary", "Contacts", "Crafts", "Deceive", "Drive",
    "Empathy", "Fight", "Investigate", "Lore", "Notice", "Physique",
    "Provoke", "Rapport", "Resources", "Shoot", "Stealth", "Will"
  ];

  constructor() {
    this.skills = FateCoreCharacter.skillNames.map(name => new FateCoreSkill(name, 0));
    this.stressTracks = [
      new FateCoreStressTrack("Physical", "Physique"),
      new FateCoreStressTrack("Mental", "Will")
    ];
  }
}
