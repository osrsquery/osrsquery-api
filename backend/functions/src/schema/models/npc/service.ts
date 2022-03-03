import { GameTypeModelService } from "../../helpers/gameType";

export class NpcService extends GameTypeModelService {
  defaultTypename = "npc";

  filterFieldsMap = {
    "gameVersion.id": {},
    "gameVersion.generation": {},
  };

  sortFieldsMap = {};
}
