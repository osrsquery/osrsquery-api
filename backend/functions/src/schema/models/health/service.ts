import { lookupSymbol } from "giraffeql";
import { AccessControlMap, ExternalQuery } from "../../../types";
import { PaginatedService } from "../../core/services";

export class HealthService extends PaginatedService {
  defaultTypename = "health";

  defaultQuery: ExternalQuery = {
    gameId: lookupSymbol,
    data: lookupSymbol,
  };

  uniqueKeyMap = {
    primary: ["id"],
    secondary: ["gameId", "gameVersion"],
  };

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
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
    id: {},
    createdAt: {},
    updatedAt: {},
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

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {
    get: () => true,
    getMultiple: () => true,
  };
}
