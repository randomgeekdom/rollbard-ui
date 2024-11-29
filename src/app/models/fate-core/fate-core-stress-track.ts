import FateCoreSkill from "./fate-core-skill";

export default class FateCoreStressTrack{
  constructor(public name: string = "", public associatedSkill: string) {
  }
  stress1: boolean = false;
  stress2: boolean = false;
  stress3: boolean = false;
  stress4: boolean = false;
}
