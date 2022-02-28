import { GameVersionGameTypeLink } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(GameVersionGameTypeLink, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};
