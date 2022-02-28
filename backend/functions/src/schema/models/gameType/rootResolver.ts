import { GameType } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(GameType, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};
