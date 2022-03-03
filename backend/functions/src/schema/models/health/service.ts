import { GameTypeModelService } from "../../helpers/gameType";

export class HealthService extends GameTypeModelService {
  defaultTypename = "health";

  filterFieldsMap = {
    "gameVersion.id": {},
    "gameVersion.generation": {},
    field3272: {},
    field3275: {},
    field3276: {},
    field3277: {},
    field3278: {},
    field3283: {},
    healthScale: {},
    healthBarPadding: {},
    healthBarBackSpriteId: {},
    healthBarFrontSpriteId: {},
  };

  sortFieldsMap = {
    field3272: {},
    field3275: {},
    field3276: {},
    field3277: {},
    field3278: {},
    field3283: {},
    healthScale: {},
    healthBarPadding: {},
    healthBarBackSpriteId: {},
    healthBarFrontSpriteId: {},
  };
}
