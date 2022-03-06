import { GameTypeModelService } from "../../helpers/gameType";

export class ItemService extends GameTypeModelService {
  defaultTypename = "item";

  filterFieldsMap = {
    "gameVersion.id": {},
    "gameVersion.generation": {},
  };

  sortFieldsMap = {};
}
