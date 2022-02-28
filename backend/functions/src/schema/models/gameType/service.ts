import { AccessControlMap } from "../../../types";
import { PaginatedService } from "../../core/services";

export class GameTypeService extends PaginatedService {
  defaultTypename = "gameType";

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

  accessControl: AccessControlMap = {};
}
