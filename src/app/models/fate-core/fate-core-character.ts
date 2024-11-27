import FateCoreStunt from "./fate-core-stunt";
import FateCoreStressTrack from "./fate-core-stress-track";

export default class FateCoreCharacter{
  name = "";
  description = "";
  aspects: string[] = [];
  stunts: FateCoreStunt[] = [];
  extras: string[] = [];
  stressTracks: FateCoreStressTrack[] = [];
  consequence2: string = "";
  consequence4: string = "";
  consequence6: string = "";
}
