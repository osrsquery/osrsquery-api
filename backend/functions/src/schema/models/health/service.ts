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
    healthScale: {},
  };

  sortFieldsMap = {
    id: {},
    createdAt: {},
    updatedAt: {},
    healthScale: {},
  };

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {
    get: () => true,
    getMultiple: () => true,
  };
}
