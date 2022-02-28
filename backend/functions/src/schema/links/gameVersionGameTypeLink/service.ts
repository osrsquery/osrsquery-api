import { LinkService } from "../../core/services";
import { AccessControlMap } from "../../../types";

export class GameVersionGameTypeLinkService extends LinkService {
  defaultTypename = "gameVersionGameTypeLink";

  filterFieldsMap = {};

  uniqueKeyMap = {
    primary: ["id"],
  };

  sortFieldsMap = {
    createdAt: {},
  };

  searchFieldsMap = {};

  groupByFieldsMap = {};

  accessControl: AccessControlMap = {};
}
