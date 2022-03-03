import { GameTypeModelService } from "../../helpers/gameType";

export class TextureService extends GameTypeModelService {
  defaultTypename = "texture";

  filterFieldsMap = {
    "gameVersion.id": {},
    "gameVersion.generation": {},
    fileIds: {},
    sprite: {},
  };

  sortFieldsMap = {
    sprite: {},
  };
}
