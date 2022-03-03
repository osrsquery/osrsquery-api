import { lookupSymbol } from "giraffeql";
import { AccessControlMap, ExternalQuery } from "../../../types";
import { PaginatedService } from "../../core/services";

export class TextureService extends PaginatedService {
  defaultTypename = "texture";

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
    sprite: {},
  };

  sortFieldsMap = {
    id: {},
    createdAt: {},
    updatedAt: {},
    sprite: {},
  };

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {};
}
