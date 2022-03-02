import { lookupSymbol } from "giraffeql";
import { AccessControlMap, ExternalQuery } from "../../../types";
import { PaginatedService } from "../../core/services";

export class GameTypeService extends PaginatedService {
  defaultTypename = "gameType";

  defaultQuery: ExternalQuery = {
    id: lookupSymbol,
    name: lookupSymbol,
    avatar: lookupSymbol,
    description: lookupSymbol,
    fileName: lookupSymbol,
  };

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
    "gameVersionGameTypeLink/gameVersion.id": {},
  };

  sortFieldsMap = {
    id: {},
    createdAt: {},
    updatedAt: {},
  };

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {
    get: () => true,
    getMultiple: () => true,
  };
}
