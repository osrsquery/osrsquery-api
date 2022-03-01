import { lookupSymbol } from "giraffeql";
import { AccessControlMap, ExternalQuery } from "../../../types";
import { PaginatedService } from "../../core/services";

export class HealthService extends PaginatedService {
  defaultTypename = "health";

  presets: ExternalQuery = {
    default: {
      id: lookupSymbol,
      gameId: lookupSymbol,
      gameVersion: {
        id: lookupSymbol,
        name: lookupSymbol,
      },
      healthScale: lookupSymbol,
      data: lookupSymbol,
    },
  };

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
    "gameVersion.id": {},
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
