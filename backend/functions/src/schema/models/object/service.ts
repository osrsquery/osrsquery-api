import { GameTypeModelService } from "../../helpers/gameType";

export class ObjectService extends GameTypeModelService {
  defaultTypename = "object";

  filterFieldsMap = {
    "gameVersion.id": {},
    "gameVersion.generation": {},
  };

  sortFieldsMap = {};
}
